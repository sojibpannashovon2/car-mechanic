import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    return (
        <div className="card w-full   bg-base-100 shadow-xl border border-error">
            <figure className='p-4'><img className=' h-fit rounded-xl border-2 border-white' src={service.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <div className="badge badge-secondary p-4 font-bold">{service.title}</div>
                </h2>

                <div className="card-actions justify-between mt-6">
                    <div className="badge badge-outline text-red-600 p-3">
                        Price: {service.price}
                    </div>
                    <div className="badge badge-outline p-3">
                        <FaArrowRight></FaArrowRight>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;