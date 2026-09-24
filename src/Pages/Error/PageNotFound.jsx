import React from 'react';
import PageNotFounds from '../../assets/error-404.png';
import { Link } from 'react-router';
const PageNotFound = () => {
    return (
        <div className='flex bg-[#f5f5f5] justify-center px-10'>
            <div className='py-10 md:py-20 text-center'>
                <img className='mx-auto' src={PageNotFounds}></img>
                <h2 className='text-3xl font-bold text-center mt-6 mb-1'>OPPS!! PAGE NOT FOUND</h2>
                <p className='text-center text-gray-500'>The App you are requesting is not found on our system.  please try another apps</p>
                <Link to={"/"}>
                    <button className='btn text-center text-white bg-linear-163 from-[#7110dd] to-[#aa59ec] mt-5'>Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;