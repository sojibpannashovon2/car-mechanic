import React from 'react';
import {
    FaCaretLeft,
    FaCaretRight
} from "react-icons/fa";

import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"
import img5 from "../../../assets/images/banner/5.jpg"
import img6 from "../../../assets/images/banner/6.jpg"
const Banner = () => {
    return (
        <div className="carousel w-full text-white h-[700px] ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-2xl" />

                <div className=" rounded-2xl absolute w-2/4 h-full left-0 right-0  space-y-7 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] pl-16 pt-48">
                    <h1 className='text-6xl font-bold'>
                        Affordable Price For Car Servicing
                    </h1>
                    <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className=''>
                        <button className="btn btn-primary mr-4">Discover More</button>
                        <button className="btn btn-secondary">Latest Project</button>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                    <a href="#slide4" className="btn btn-circle"><FaCaretLeft></FaCaretLeft></a>
                    <a href="#slide2" className="btn btn-circle"><FaCaretRight></FaCaretRight></a>
                </div>


            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-2xl" />
                <div className=" rounded-2xl absolute w-2/4 h-full left-0 right-0  space-y-7 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] pl-16 pt-48">
                    <h1 className='text-6xl font-bold'>
                        Affordable Price For Car Servicing
                    </h1>
                    <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className=''>
                        <button className="btn btn-primary mr-4">Discover More</button>
                        <button className="btn btn-secondary">Latest Project</button>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                    <a href="#slide1" className="btn btn-circle"><FaCaretLeft></FaCaretLeft></a>
                    <a href="#slide3" className="btn btn-circle"><FaCaretRight></FaCaretRight></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-2xl" />
                <div className=" rounded-2xl absolute w-2/4 h-full left-0 right-0  space-y-7 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] pl-16 pt-48">
                    <h1 className='text-6xl font-bold'>
                        Affordable Price For Car Servicing
                    </h1>
                    <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className=''>
                        <button className="btn btn-primary mr-4">Discover More</button>
                        <button className="btn btn-secondary">Latest Project</button>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-2xl" />
                <div className=" rounded-2xl absolute w-2/4 h-full left-0 right-0  space-y-7 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] pl-16 pt-48">
                    <h1 className='text-6xl font-bold'>
                        Affordable Price For Car Servicing
                    </h1>
                    <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className=''>
                        <button className="btn btn-primary mr-4">Discover More</button>
                        <button className="btn btn-secondary">Latest Project</button>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;