import React from 'react';
import { ArrowDownToLine, ColumnsSettings } from 'lucide-react';
import Star from '../../assets/icon-ratings.png';
import { ArrowBigDownDash } from 'lucide-react'
import { useLoaderData } from 'react-router';
import { getStorage } from '../Js/LocalStorage';
const InstallApps = () => {
    const installData = useLoaderData();
    const localData = getStorage();
    const filterData = installData.filter(item => localData.includes(item.id));
    return (
        <div className='bg-[#f5f5f5]'>
            <div class="py-10 md:py-20 md:max-w-dvw px-8 md:px-20 md:mx-5">
                <div className='text-center'>
                    <h2 className="text-4xl md:text-5xl font-bold">Your Installed Apps </h2>
                    <p className="my-5 text-gray-500">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="flex justify-between mt-10">
                    <h4 className="font-bold text-xl pt-3">{filterData.length} Apps Found</h4>
                    <div>
                        <details className="dropdown">
                            <summary className="btn m-1">Sort By Size <ArrowBigDownDash /></summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </details>
                    </div>
                </div>
                {
                    filterData.map(item => 
                        <div className='mt-4'>
                            <div className='flex flex-col sm:flex-row items-center justify-between mb-4 bg-white p-5'>
                                <div className='flex flex-col sm:flex-row gap-5'>
                                    <div className='flex sm:flex-none items-center justify-center'><img className="sm:size-20 rounded-box" alt="Tailwind CSS list item" src={item.image} /></div>
                                    <div>
                                        <div className='mb-5'>
                                            <div className='font-bold'>{item.title}</div>
                                        </div>
                                        <div className='flex justify-between gap-4 items-center'>
                                            <p className='flex p-2 gap-1 btn btn-soft btn-success'><span><ArrowDownToLine /></span>{item.downloads >= 1000000 ?
                                                item.downloads / 1000000 + "M"
                                                :
                                                item.downloads >= 1000 ?
                                                    item.downloads / 1000 + "K"
                                                    :
                                                    item.downloads
                                            }</p>
                                            <p className='flex p-2 gap-1 btn btn-soft btn-warning'><span><img className='h-5 w-5' src={Star}></img></span>{item.ratingAvg}</p>
                                            <p>{item.size} MB</p>
                                        </div>
                                    </div>
                                </div>
                                <button className='btn bg-[#00d494] mt-5 sm:mt-0 btn-accent text-white'>Uninstall</button>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default InstallApps;