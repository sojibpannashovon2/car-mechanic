import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`services.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services);
    return (
        <div>
            <h3 className='text-4xl text-rose-500 font-bold text-center'>Our Services</h3>
            <p className=' font-bold text-center' >the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>

            <div className='my-4'>
                <h1 className='text-center'>Services: {services.length}</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-4'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }

                </div>


            </div>
        </div>
    );
};

export default Services;