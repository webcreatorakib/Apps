import { useLoaderData } from "react-router";
import Google from "../../assets/fi_16076057.png";
import App from "../../assets/fi_5977575.png";
import Hero from '../../assets/hero.png';
import HomeApps from "./Trendaing/Apps/HomeApps";
import { Suspense, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
const Home = () => {
    const apps = useLoaderData();
    const [appsData, setAppsData] = useState(() => {
        return apps.slice(0, 12);
    });
    const handleLoadMore = () => {
        if (
            appsData.length >= apps.length) {
            toast("No More Data !",{
                style: {
                    background: "black",
                    color : "white"
                }
            });
            return;
        }
        const addSlice = apps.slice(0, appsData.length + 12);
        setAppsData(addSlice)
    }

    return (
        <div className="bg-[#f5f5f5] text-center pt-20">
            <div className="px-5">
                <h1 className="text-5xl md:text-6xl font-bold">We Build <br></br> <span className="bg-linear-163 from-[#7110dd] to-[#aa59ec] bg-clip-text text-transparent font-extrabold">Productive</span> Apps</h1>
                <p className="my-6 text-gray-500 md:text-xl">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="mt-2 flex items-center gap-5 justify-center">
                    <a href="https://play.google.com/store/apps?hl=en" className="btn md:text-xl md:btn-xl btn-outline border-gray-300"><img src={Google}></img>Google Play</a>
                    <a href="https://apps.apple.com/us/app/imposter-game-spy-fakeit/id6749012623" className="btn md:text-xl md:btn-xl btn-outline border-gray-300"><img src={App} ></img>App Store</a>
                </div>
                <div className="flex justify-center mt-8">
                    <figure>
                        <img src={Hero}></img>
                    </figure>
                </div>
            </div>
            <div className="bg-linear-163 from-[#7110dd] to-[#aa59ec] relative py-20 px-5 text-white">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold">Trusted by Millions, Built for You</h2>
                    <div className="flex justify-center mt-8 flex-wrap gap-20">
                        <div>
                            <p className="text-gray-300">Total Downloads</p>
                            <h3 className="font-bold text-5xl my-4">29.6M</h3>
                            <p className="text-gray-300">21% more than last month</p>
                        </div>
                        <div>
                            <p className="text-gray-300">Total Reviews</p>
                            <h3 className="font-bold text-5xl my-4">906K</h3>
                            <p className="text-gray-300">46% more than last month</p>
                        </div>
                        <div>
                            <p className="text-gray-300">Active Apps</p>
                            <h3 className="font-bold text-5xl my-4">132+</h3>
                            <p className="text-gray-300">31 More will Lunch</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-20 px-5">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold">Trending Apps</h2>
                    <p className="my-5 text-gray-500">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="mt-10 sm:px-8 md:px-20 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                    {
                        appsData.map((item, index) => <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
                            <HomeApps item={item} key={index}></HomeApps>
                        </Suspense>)
                    }
                </div>
                <div className='mt-10'>
                    <button className='btn bg-linear-163 from-[#7110dd] to-[#aa59ec] text-white btn-xl' onClick={()=>handleLoadMore()}>Show More</button>
                </div>
            </div>
            {/* alert */}
            <ToastContainer />
        </div>
        
    );
};

export default Home;