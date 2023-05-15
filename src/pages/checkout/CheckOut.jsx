import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../providers/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(authContext)
    const service = useLoaderData()
    // console.log(service);
    const { price, _id, img, title } = service

    console.log(service.img);

    const handleBookService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const order = {
            customerName: name,
            customerEmail: email,
            OrderDate: date,
            service_id: _id,
            img,
            price,
            service: title
        }

        // console.log(order);
        // const name = form.name.value;
        fetch(`http://localhost:7000/bookings`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("Service Add Successfully")
                }
            })
    }
    return (
        <div className='my-5'>
            <h1 className='text-center text-5xl font-bold my-5'>Book services</h1>

            <div className="card-body mx-32 border border-white rounded-xl">
                <form onSubmit={handleBookService}>

                    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" defaultValue={"$" + price} className="input input-bordered" />

                        </div>
                    </div>
                    <br />
                    <div className="form-control">
                        <textarea className='p-4 rounded-lg bg-slate-200' name="" id="" cols="30" rows="6" placeholder="Your message"></textarea>
                        {/* <input type="text" placeholder="password" className="input input-bordered" /> */}

                    </div>

                    <div className="form-control mt-6 w-1/4 mx-auto">
                        {/* <button className="btn btn-primary">Login</button> */}
                        <input type="submit" className="input input-bordered btn btn-primary" value="Order_Confirm " />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default CheckOut;