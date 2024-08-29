import React from 'react';

const NaukriAppPromotion = () => {
  return (
    <div className="bg-blue-50 py-20 my-20 rounded-lg flex flex-col lg:flex-row items-center justify-around">
      <div className="text-center lg:text-left mb-6 lg:mb-0">
      <img 
      src="https://static.naukimg.com/s/0/0/i/download-app-link/MaskGroupOneTheme.png" 
      alt="MaskGroupOneTheme"
      className='h-[20rem]' />
        <h2 className="text-2xl font-bold">10M+ users are on the Naukri app</h2>
        <p className="text-gray-600 mt-2">Get real-time job updates & more!</p>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter mobile number..."
            className="border rounded-l-lg py-2 px-4 w-48 focus:outline-none"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-r-lg">
            Get link
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <img src="https://static.naukimg.com/s/0/0/i/download-app-link/qr-code.svg" alt="QR Code" className="mr-10 h-36 w-36" />
        <div className="flex flex-col space-y-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className=" w-52" />
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className=" w-52" />
        </div>
      </div>
    </div>
  );
};

export default NaukriAppPromotion;
