import { useLoaderData } from 'react-router';
import SingleApps from './SingleApps';
import { useState } from 'react';
import NotFound from '../Error/NotFound';
import logo from '../../assets/logo.png'
const Apps = () => {
    const apps = useLoaderData();
    const [searchText, setSearchText] = useState('');
    const [searchLoading, setSearchLoading] = useState(false)
    const handleSearch = (e) => {
        setSearchText(e.target.value)
        setSearchLoading(true);
        setTimeout(() => {
            setSearchLoading(false)
        }, 500);
    }
    const filterApps = apps.filter((app) =>
        app.title.toLowerCase().includes(searchText.toLowerCase())
    )
    return (
        <>
            {
                filterApps.length ? <div className='bg-[#f5f5f5]'>
                    <div class="py-10 md:py-20 md:max-w-dvw px-8 md:px-20 md:mx-5">
                        <div className='text-center'>
                            <h2 className="text-4xl md:text-5xl font-bold">Our All Application </h2>
                            <p className="my-5 text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</p>
                        </div>
                        <div className="flex flex-col-reverse sm:flex-row justify-between mt-10">
                            <h4 className="font-bold text-xl pt-3">({filterApps.length}) Apps Found</h4>
                            <div>
                                <label className="input">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                        </g>
                                    </svg>
                                    <input type="search" onChange={(e) => handleSearch(e)} className="grow focus:outline-none" placeholder="Search" />
                                </label>
                            </div>
                        </div>
                        {
                            searchLoading ?
                                <div className={`h-15 w-15 mt-16 mx-auto`}>
                                    <div className="flex items-center justify-center gap-6">
                                        <img className="animate-spin" src={logo} />
                                        <div className="flex items-center text-2xl font-bold">
                                            <p className='me-2'>Loading</p>
                                            <span className="loading loading-dots loading-md"></span>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="mt-4 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                                    {filterApps.map((item, index) => <SingleApps key={index} item={item}></SingleApps>)
                                    }
                                </div>
                        }

                    </div>
                </div> : <NotFound></NotFound>
            }
        </>
    );
};

export default Apps;