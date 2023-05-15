import React from 'react';
import log02 from "../../assets/logo/logo2.svg"
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content
        border border-white ">
            <div>
                <img className='w-16 h-16 border border-white rounded-lg' src={log02} alt="" />
                <p>Car Mechanic Industries Ltd.<br />Providing reliable tech since 2020</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;