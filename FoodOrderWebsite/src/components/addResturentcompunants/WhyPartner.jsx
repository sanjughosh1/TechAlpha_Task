import React from 'react';
import CountUp from 'react-countup'; // Import the CountUp component

const WhyPartner = () => {
    return (
        <section className="text-center p-16 bg-gray-200">
            <h2 className="text-4xl font-bold">Why should you partner with Tomato?</h2>
            <p className="mt-4 text-xl text-gray-500">
                Tomato enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.
            </p>
            <div className="mt-8 flex justify-around">
                <div className='flex justify-center m-3 shadow-2xl bg-white rounded-xl p-6'>
                <img src="/icons/glob.png" alt="" className='m-2' />
                <div className="text-center">
                    <h3 className="text-2xl text-blue-400 font-bold">
                        <CountUp end={500} duration={8} />+ cities
                    </h3>
                    <p>in India</p>
                </div>
                </div>
                <div className='flex justify-center m-3 rounded-xl bg-white shadow-2xl p-6'>
                    <img src="/icons/calenderIcon.png" alt="" className='m-2' />
                <div className="text-center">
                    <h3 className="text-2xl  text-blue-400 font-bold">
                        <CountUp end={250000} separator="," duration={8} />+
                    </h3>
                    <p>restaurant listings</p>
                </div>
                </div>
                <div className='flex justify-center m-3 rounded-xl bg-white shadow-2xl p-5'>
                    <img src="/icons/restaurantIcon.png" alt="" className='m-2' />
                    <div className="text-center">
                    <h3 className="text-2xl  text-blue-400 font-bold">
                        <CountUp end={40000000} separator="," duration={8} />+
                    </h3>
                    <p>monthly orders</p>
                </div>
                </div>
            </div>
        </section>
    );
};

export default WhyPartner;
