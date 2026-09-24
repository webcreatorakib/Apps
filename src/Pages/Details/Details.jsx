import React, { useState } from 'react';
import Download from '../../assets/icon-downloads.png';
import Rating from '../../assets/icon-ratings.png';
import Like from '../../assets/icon-review.png';
import { ToastContainer, toast } from 'react-toastify';
//chart 
import { BarChart, XAxis, YAxis, Bar } from 'recharts';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
    // showing items
    const { id } = useParams()
    const appData = useLoaderData();
    const newApp = appData.find(item => item.id == id);
    const { title, image, downloads, ratingAvg, description, reviews, ratings, size } = newApp;
    const newReviews = reviews / 1000;
    let data = []
    for (let i = ratings.length - 1; i >= 0; i--){
        const item = ratings[i];
        data.push(item)
    }
    // button disable
    const [show, setShow] = useState(false);
    function handleInstall(value) {
        setShow(value)
        toast("Install Completed", {
            style: {
                background: "black",
                color: "white"
            }
        });
    }
    return (
        <div className='bg-[#f5f5f5] md:pt-20 pt-10 px-10 md:px-20'>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex justify-center'>
                    <img className='w-96' src={image}></img>
                </div>
                <div className='w-full'>
                    <h2 className='text-2xl font-bold'>{title}</h2>
                    <p className='text-xl text-gray-600 mt-2'>Developed by <span className='bg-linear-163 from-[#7110dd] to-[#aa59ec] bg-clip-text text-transparent'>productive.io</span></p>
                    <div className="divider"></div>
                    <div className='flex'>
                        <div className="stats">
                            <div className="stat">
                                <img src={Download}></img>
                                <p className='stat-title mt-1'>Downloads</p>
                                <div className="stat-value">
                                    {downloads >= 1000000 ?
                                        downloads / 1000000 + "M"
                                        :
                                        downloads >= 1000 ?
                                            downloads / 1000 + "K"
                                            :
                                            downloads
                                    }</div>
                            </div>
                        </div>
                        <div className="stats">
                            <div className="stat">
                                <img src={Rating}></img>
                                <p className='stat-title mt-1'>Average Ratings</p>
                                <div className="stat-value">{ratingAvg}</div>
                            </div>
                        </div>
                        <div className="stats">
                            <div className="stat">
                                <img src={Like}></img>
                                <p className='stat-title mt-1'>Total Reviews</p>
                                <div className="stat-value">{newReviews}K</div>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => handleInstall(!show)} className={`btn mt-5 sm:mt-0 text-white ${show ? "btn-disabled bg-[#00d49476]" : ""} bg-[#00d494]`}>{show ? "Installed" : `Install Now (${size} MB)` }</button>
                </div>
            </div>
            <div className="divider"></div>
            <h2 className='text-2xl font-bold mb-4'>Rating</h2>

            {/* Chart */}
            <div>
                <BarChart
                    width={"100%"}
                    height={200}
                    data={data}
                    layout="vertical"
                    barCategoryGap={10}
                    responsive
                >
                    <XAxis
                        tickLine={false}
                        type="number"
                        axisLine={false}
                    />
                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        type="category"
                        dataKey="name"
                    />
                    <Bar
                        dataKey="count"
                        barSize={20}
                        fill="#ff8c30"
                    />
                </BarChart>
            </div>

            {/* description */}
            <div className='py-10'>
                <h2 className='text-2xl font-bold mb-4'>Description</h2>
                <div className='text-gray-500'>
                    <p className='my-6 text-justify'>
                        {description}
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Details;