import React from 'react';
import Spinner from '../../assets/logo.png'
const LoadingSpinner = () => {
    return (
        <div className='h-lvh flex justify-center items-center'>
            <div className='flex justify-center items-center'>
                <img className='w-16 me-5 flex items-center justify-center animate-spin' src={Spinner}></img>
                <h2 className='text-2xl font-bold text-gray-500'>Loading <span className="loading loading-dots loading-md"></span></h2>
            </div>
        </div>
    );
};

export default LoadingSpinner;