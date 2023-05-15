import React, { useContext } from 'react';
import logo1 from '../../../assets/logo/logo2.svg'
import { Link } from 'react-router-dom';
import { authContext } from '../../../providers/AuthProvider';
const Navbar = () => {

    const { user, logOut } = useContext(authContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert("log-out successfully")
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-base-100 border border-white rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <ul className="menu menu-horizontal px-1 gap-6 ">
                            <Link className='font-bold text-xl' to="/">Home</Link>
                            <Link className='font-bold text-xl' to="/">About</Link>
                            <Link className='font-bold text-xl' to="/">Home</Link>
                        </ul>
                    </ul>
                </div>

                <Link to="/">
                    <img className='w-12 h-12 border border-white rounded-lg' src={logo1} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    <li>    <Link className='font-bold text-xl' to="/">Home</Link></li>
                    <li> <Link className='font-bold text-xl' to="/">About</Link></li>
                    {
                        user?.email ? <li> <Link onClick={handleLogOut} className='font-bold btn btn-error text-white text-xl' >Log-Out</Link></li>
                            : <li> <Link className='font-bold text-xl' to="login">Log-In</Link></li>
                    }


                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-accent">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;