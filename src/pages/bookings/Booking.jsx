import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../providers/AuthProvider';
import BookingRows from './BookingRows';


const Booking = () => {
    const { user } = useContext(authContext)
    // console.log(user);

    const [bookings, setBookings] = useState([])


    const url = `http://localhost:7000/bookings?email=${user?.email}`

    useEffect(() => {
        // if (!user?.email) return
        // user?.email
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearar:  ${localStorage.getItem("jwt-token")}`
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    console.log(bookings);
    // const { price, service_id, img, service } = booking

    const handleDelete = (id) => {
        const procced = confirm("Are you ready to delete this service !!")

        if (procced) {
            fetch(`http://localhost:7000/bookings/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log("working", data)
                    if (data.deleteCount > 0) {
                        alert("Deleted successfully")
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                }
                )
        }
    }

    const handleBookingConfirm = (Id) => {

        fetch(`http://localhost:7000/bookings/${Id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data2 => {
                console.log(data2);
                if (data2.modifiedCount > 0) {
                    const remaining = bookings.filter(pd => pd._id !== Id)
                    const updated = bookings.find(cd => cd._id === Id)
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining]
                    setBookings(newBookings)
                    alert("update data successfully !!!")

                }
            })

    }
    return (
        <div className="overflow-x-auto w-full">

            <div className='text-4xl text-center my-6 font-bold'> Service-Item: {bookings.length}</div>
            <table className="table w-full">
                {/* head */}
                <thead className='rounded border border-white my-6'>
                    <tr className='p-2 '>
                        <th >

                        </th>
                        <th className='text-2xl text-white'>Service-Image</th>
                        <th className='text-2xl text-white'>Name</th>
                        <th className='text-2xl text-white'>Amount</th>
                        <th className='text-2xl text-white'>Date</th>
                        <th className='text-2xl text-white'>Update</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings.map(booking => <BookingRows key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleBookingConfirm={handleBookingConfirm}
                        ></BookingRows>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default Booking;