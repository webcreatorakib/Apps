
import { ArrowDownToLine } from 'lucide-react';
import  Star  from '../../../../assets/icon-ratings.png';
const HomeApps = () => {
    return (
        <>
            <div>
                <h2 className="text-4xl md:text-5xl font-bold">Trending Apps</h2>
                <p className="my-5 text-gray-500">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="mt-10 px-8 md:px-20 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                <div className="card bg-white p-4 shadow-sm">
                    <figure>
                        <img className='rounded-xl h-80'
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Forest : Forcus for productivity</h2>
                        <div className='flex justify-between gap-30'>
                            <p className='flex px-0 gap-1 btn btn-soft btn-success'><span><ArrowDownToLine /></span>9M</p>
                            <p className='flex px-0 gap-1 btn btn-soft btn-warning'><span><img className='h-5 w-5' src={Star}></img></span>5</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-white p-4 shadow-sm">
                    <figure>
                        <img className='rounded-xl h-80'
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Forest : Forcus for productivity</h2>
                        <div className='flex justify-between gap-30'>
                            <p className='flex px-0 gap-1 btn btn-soft btn-success'><span><ArrowDownToLine /></span>9M</p>
                            <p className='flex px-0 gap-1 btn btn-soft btn-warning'><span><img className='h-5 w-5' src={Star}></img></span>5</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-white p-4 shadow-sm">
                    <figure>
                        <img className='rounded-xl h-80'
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Forest : Forcus for productivity</h2>
                        <div className='flex justify-between gap-30'>
                            <p className='flex px-0 gap-1 btn btn-soft btn-success'><span><ArrowDownToLine /></span>9M</p>
                            <p className='flex px-0 gap-1 btn btn-soft btn-warning'><span><img className='h-5 w-5' src={Star}></img></span>5</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-white p-4 shadow-sm">
                    <figure>
                        <img className='rounded-xl h-80'
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Forest : Forcus for productivity</h2>
                        <div className='flex justify-between gap-30'>
                            <p className='flex px-0 gap-1 btn btn-soft btn-success'><span><ArrowDownToLine /></span>9M</p>
                            <p className='flex px-0 gap-1 btn btn-soft btn-warning'><span><img className='h-5 w-5' src={Star}></img></span>5</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <button className='btn bg-linear-163 from-[#7110dd] to-[#aa59ec] text-white btn-xl'>Show All</button>
            </div>
        </>
    );
};

export default HomeApps;