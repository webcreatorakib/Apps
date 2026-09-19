import React from 'react';
import Watch from '../../assets/watch.png';
import Download from '../../assets/icon-downloads.png';
import Rating from '../../assets/icon-ratings.png';
import Like from '../../assets/icon-review.png';
//chart 
import { BarChart, XAxis, YAxis, Bar } from 'recharts';

const Details = () => {

    const data = [
        { name: "5 Star", value: 5000 },
        { name: "4 Star", value: 3002 },
        { name: "3 Star", value: 1005 },
        { name: "2 Star", value: 80 },
        { name: "1 Star", value: 500 },
    ]
    return (
        <div className='bg-[#f5f5f5] md:pt-20 pt-10 px-10 md:px-20'>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex justify-center'>
                    <img className='w-96' src={Watch}></img>
                </div>
                <div className='w-full'>
                    <h2 className='text-2xl font-bold'>SmPlan:ToDo List with Reminder</h2>
                    <p className='text-xl text-gray-600 mt-2'>Developed by <span className='bg-linear-163 from-[#7110dd] to-[#aa59ec] bg-clip-text text-transparent'>productive.io</span></p>
                    <div className="divider"></div>
                    <div className='flex'>
                        <div className="stats">
                            <div className="stat">
                                <img src={Download}></img>
                                <p className='stat-title mt-1'>Downloads</p>
                                <div className="stat-value">8M</div>
                            </div>
                        </div>
                        <div className="stats">
                            <div className="stat">
                                <img src={Rating}></img>
                                <p className='stat-title mt-1'>Average Ratings</p>
                                <div className="stat-value">4.9</div>
                            </div>
                        </div>
                        <div className="stats">
                            <div className="stat">
                                <img src={Like}></img>
                                <p className='stat-title mt-1'>Total Reviews</p>
                                <div className="stat-value">54K</div>
                            </div>
                        </div>
                    </div>
                    <button className='btn mt-5 sm:mt-0 text-white bg-[#00d494]'>Install Now (291 MB)</button>
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
                        dataKey="value"
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
                        This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
                    </p>

                    <p className='my-6 text-justify'>
                        A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
                    </p>
                    <p className='text-justify'>
                        For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Details;