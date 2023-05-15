import React from 'react';
import Banner from '../banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='my-5'>
            <Banner></Banner>
            <div className='my-4 border border-warning'>
                <About></About>
            </div>
            <div className='my-4 '>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;