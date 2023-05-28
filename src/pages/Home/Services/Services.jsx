import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const searchRef = useRef(null)
    const [services, setServices] = useState([])
    const [asc, setAsc] = useState(true)
    const [search, setSearch] = useState("")

    const handleSearch = () => {
        console.log(searchRef.current.value);
        setSearch(searchRef.current.value);
    }
    useEffect(() => {
        fetch(`http://localhost:7000/services?search=${search}&sort=${asc ? "asc" : "desc"}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [asc, search])

    // console.log(services);
    return (
        <div>
            <h3 className='text-4xl text-rose-500 font-bold text-center'>Our Services</h3>
            <br />
            <br />
            <div className='text-center'>
                <button className='btn btn-warning py-5 font-bold' onClick={() => setAsc(!asc)}>
                    {
                        asc ? `Price: Low To High` : <strong className=''>Price: High To Low</strong>
                    }
                </button>
            </div>
            <br />
            <br />
            <div className='w-[20%] mx-auto my-10'>

                <div className="form-control ">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" ref={searchRef} className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

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