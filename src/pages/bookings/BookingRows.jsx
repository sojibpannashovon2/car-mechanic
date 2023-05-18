import React from 'react';

const BookingRows = ({ booking, handleDelete, handleBookingConfirm }) => {
    console.log(booking);
    const { price, OrderDate, img, service, _id, status } = booking
    // console.log(_id);

    return (
        <tr >
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td >
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        {/* mask mask-squircle */}
                        <div className="rounded w-48 h-48 border-2 border-white rounded-2">
                            <img className='shadow-xl' src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td className='font-semibold text-2xl text-white'>
                {service}
            </td>
            <td className='font-semibold  text-2xl text-white'>
                $ {price}
            </td>
            <td className='font-semibold  text-2xl text-white'>{OrderDate}</td>
            <th>
                {
                    status === 'confirm' ? <span className='font-bold text-red-500'> Updated-confirm </span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-outline ">Confirm</button>
                }
            </th>
        </tr>

    );
};

export default BookingRows;