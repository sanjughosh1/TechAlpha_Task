import React from 'react';

const GetTheApp =  () => {
  return (
    <div className="bg-gray-50 py-12 flex justify-center">
      <div className="bg-red-300 shadow-lg rounded-lg p-8 max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
        <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <img
            src="/images/mobile2.png"
            alt="Tomato App"
            className="h-full w-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-6">Get the Tomato App</h2>
          <p className="mb-6 text-gray-600">We will send you a link, open it on your phone to download the app</p>
          
          <div className="flex mb-6 space-x-4 justify-center md:justify-start">
            <label className="flex items-center space-x-2">
              <input type="radio" name="contact" value="email" className="form-radio h-4 w-4 text-red-500" defaultChecked />
              <span>Email</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="contact" value="phone" className="form-radio h-4 w-4 text-red-500" />
              <span>Phone</span>
            </label>
          </div>

          <div className="mb-6 w-full max-w-sm mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Email or phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            />
          </div>

          <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300">
            Share App Link
          </button>

          <div className="flex mt-6 space-x-4 justify-center md:justify-start">
            <a 
            href="https://play.google.com" 
            target="_blank" rel="noopener noreferrer">
              <img src="/icons/playstore.png" alt="Google Play" className="h-12 rounded-xl" />
            </a>
            <a 
            href="https://www.apple.com" 
            target="_blank" 
            rel="noopener noreferrer">
              <img src="/icons/appstore.png" alt="App Store" className="h-12 rounded-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTheApp;
