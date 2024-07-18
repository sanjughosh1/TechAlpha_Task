import React from 'react';

import bannerImage from '/images/addressbackground.jpg';

const HowItWorks = () => {
    return (
        <section className="text-center py-16 bg-cover bg-center"  style={{ backgroundImage: `url(${bannerImage})` }} >
            <h2 className="text-4xl font-bold">How it works?</h2>
            <div className="mt-8 flex justify-around">
                <div className='m-10 p-10 rounded-md flex flex-col items-center shadow-2xl'>
                    <img src="/icons/book.png" className='w-20 bg-transparent mb-5 ' alt="" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">Step 1</h3>
                    <p>Create your page on Tomato</p>
                  </div>
                </div>
                <div  className='m-10 p-10 rounded-md flex flex-col items-center shadow-2xl'>
                    <img src="/icons/bike.png"  className='w-20 bg-transparent mb-5 ' alt=""/>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">Step 2</h3>
                    <p>Register for online ordering</p>
                  </div>
                </div>
                <div  className='m-10 p-10 rounded-md flex flex-col items-center shadow-2xl'>
                    <img src="/icons/package.png"  className='w-20 bg-transparent mb-5' alt="" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">Step 3</h3>
                    <p>Start receiving orders online</p>
                  </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
