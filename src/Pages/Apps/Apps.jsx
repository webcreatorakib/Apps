import { ArrowDownToLine } from 'lucide-react';
import Star from '../../assets/icon-ratings.png';
const Apps = () => {
    return (
        <div className='bg-[#f5f5f5]'>
            <div class="py-20 md:max-w-dvw px-8 md:px-20 md:mx-5">
                <div className='text-center'>
                    <h2 className="text-4xl md:text-5xl font-bold">Our All Application </h2>
                    <p className="my-5 text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className="flex flex-col-reverse sm:flex-row justify-between mt-10">
                    <h4 className="font-bold text-xl pt-3">(132) Apps Found</h4>
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
                            <input type="search" className="grow focus:outline-none" placeholder="Search" />
                        </label>
                    </div>
                </div>
                <div className="mt-4 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
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
            </div>
        </div>
    );
};

export default Apps;