import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import github from '../../assets/github.svg';
import { House, LayoutGrid, ArrowBigDownDash } from 'lucide-react';
const Header = () => {
    return (
        <div className='md:max-w-dvw px-5 md:px-20 md:mx-5'>
            <div className="navbar sticky">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" ps-0 pe-4 btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to={"/"}><House />Home</NavLink></li>
                            <li><NavLink to={'apps'}><LayoutGrid size={16} />Apps</NavLink></li>
                            <li><NavLink to={"installation"}><ArrowBigDownDash size={16} />Installation</NavLink></li>
                        </ul>
                    </div>
                    <Link to={"/"}>
                        <div className="flex gap-1 items-center cursor-pointer font-bold text-xl">
                            <figure className='h-10 w-10'>
                                <img src={logo}></img>
                            </figure>
                            <span className="bg-linear-163 from-[#7110dd] to-[#aa59ec] bg-clip-text text-transparent">AppNex</span>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='me-2'>
                            <NavLink
                            className={({ isActive}) => isActive ? "active" : ""
                            }
                            to={"/"}>
                            <House size={16} />Home</NavLink>
                        </li>
                        <li className='me-2'><NavLink to={'apps'}><LayoutGrid size={16} />Apps</NavLink></li>
                        <li><NavLink to={"installation"}><ArrowBigDownDash size={16} />Installation</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="https://github.com/webcreatorakib/Apps" className="btn text-white bg-linear-163 from-[#7110dd] to-[#aa59ec]">
                        <figure className='h-6 w-6'>
                            <img className='bg-white rounded-full' src={github}></img>
                        </figure>
                        Contribute
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;