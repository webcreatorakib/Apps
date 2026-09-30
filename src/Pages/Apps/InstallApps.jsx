import React, { useState } from 'react';
import { ArrowDownToLine } from 'lucide-react';
import Star from '../../assets/icon-ratings.png';
import { useLoaderData } from 'react-router';
import { getStorage, removeItem } from '../Js/LocalStorage';
import { toast, ToastContainer } from 'react-toastify';
const InstallApps = () => {
    //সকল ডাটা লোড করা হয়েছে।
    const apps = useLoaderData();
    //লোকাল ‍স্টোরেজ থেকে ID নেওয়া হয়েছে।
    const localData = getStorage();
    // state এর ভিতর ID গুলো নেওয়া হয়েছে।
    const [installIds, setInstallIds] = useState(localData);
    //লোকাল স্টোরেজের ID এর মিল সম্পূর্ণ id দ্বারা apps এর ডাটা গুলো নেওয়া হয়েছে।
    const installedApps = apps.filter(item => installIds.includes(item.id));

    const handleUninstall = (id) => {
        //লোকাল স্টোরেজ থেকে আইডি রিমোভ করা হয়েছে।
        removeItem(id);
        //previous data বা Id এর সাথে ক্লিক করা যে Id মিল রয়েছে ‍ ‍সেটি বাদ দিয়ে বাকি গুলো নেওয়া হয়েছে।
        setInstallIds(prev => prev.filter(item => item !== id));
        //alert show for successfully uninstall
        toast("Uninstall successful", {
            style: {
                background: "black",
                color: "white",
            }
        })
    }
    //For sorting
    const [sortBy, setSortBy] = useState("default");

    const sortApps = [...installedApps].sort((a, b) => {
        
        if (sortBy === "name") {
            return a.title.localeCompare(b.title)
        }
        if (sortBy === "size") {
            return a.size - b.size;
        }
        if (sortBy === "download") {
            return b.downloads - a.downloads
        }
    });

    return (
        <div className='bg-[#f5f5f5]'>
            <title>AppNex - Install</title>
            <div class="py-10 md:py-20 md:max-w-dvw px-8 md:px-20 md:mx-5">
                <div className='text-center'>
                    <h2 className="text-4xl md:text-5xl font-bold">Your Installed Apps </h2>
                    <p className="my-5 text-gray-500">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="flex justify-between mt-10">
                    <h4 className="font-bold text-xl pt-3">{sortApps.length} Apps Found</h4>
                    <div>
                        <fieldset className="fieldset">
                            <select onChange={(e) => setSortBy(e.target.value)} defaultValue="Sort By :" className="select">
                                <option disabled={true} value="Sort By :">Sort By :</option>
                                <option value={"name"}>Name</option>
                                <option value={"size"}>Size</option>
                                <option value={"download"}>Download</option>
                            </select>
                        </fieldset>
                    </div>
                </div>
                {
                    sortApps.map(item => 
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
                                <button onClick={()=>handleUninstall(item.id)} className='btn bg-[#00d494] mt-5 sm:mt-0 btn-accent text-white'>Uninstall</button>
                            </div>
                        </div>
                    )
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default InstallApps;