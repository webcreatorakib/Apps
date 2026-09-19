import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
import facebook from '../../assets/facebook.png';
import LinkDin from '../../assets/linkdin.png';
import x from '../../assets/x.png'
const Footer = () => {
    return (
        <footer className='bg-black py-9'>
            <div className='md:max-w-dvw px-8 md:px-20 md:mx-5'>
                <div className='flex justify-between text-white'>
                    <a className="flex gap-1 items-center cursor-pointer font-bold text-xl">
                        <figure className='h-10 w-10'>
                            <img src={logo}></img>
                        </figure>
                        <span className="text-white">HERO.IO</span>
                    </a>
                    <div>
                        <p>Social Links</p>
                        <ul className='flex gap-2 mt-3'>
                            <li><Link><img src={facebook}></img></Link></li>
                            <li><Link><img src={x}></img></Link></li>
                            <li><Link><img src={LinkDin}></img></Link></li>
                        </ul>
                    </div>
                </div>
                <div className='h-[1px] bg-gray-600 my-5'>
                </div>
                <p className='text-center text-white'>Copyright © 2025 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;