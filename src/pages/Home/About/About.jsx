import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg: w-1/2 relative'>
                    <img src={person} className=" w-3/4 rounded-xl shadow-2xl" />
                    <img src={parts} className="w-1/2 rounded-xl shadow-2xl border-8 border-white absolute right-5 top-1/2 " />
                </div>
                <div className='lg: w-1/2 ml-4'>
                    <h1 className="text-5xl font-bold">About Us</h1>
                    <p className="py-6 text-3xl w-2/4 ">We are qualified & of experience in this field</p>
                    <p className='w-3/4 '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='py-4 w-3/4 '>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-error">More-info</button>
                </div>
            </div>
        </div>
    );
};

export default About;