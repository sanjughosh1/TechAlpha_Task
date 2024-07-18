import React from 'react';
import bannerImage from '/banners/smallbanner1.jpg';

const AlreadyListed = () => {
    return (
        <div className='w-full bg-gray-100 p-10'>
            <div className="text-center p-16 w-full">
            <h2 className="text-4xl font-bold">Already have your restaurant listed?</h2>
            <p className="mt-4 text-xl">Search here and claim the ownership of your restaurant</p>
           </div>
          <div>
            <div className=' text-white m-10 p-10 bg-cover bg-center rounded-xl text-start' style={{ backgroundImage: `url(${bannerImage})` }} >
                <h1 className='text-4xl m-5'>start your journey with Delisious</h1>
                <p className='text-xl m-5'>create your restureat page and regester for online ordering</p>
                <button className='flex items-center justify-center p-4 m-5 bg-blue-400 rounded-2xl'>
                    start
                    <img src="/icons/right-arrow.png" className='w-3 m-1' alt="" />
                </button>
            </div>
          </div>
        </div>
        
    );
};

export default AlreadyListed;