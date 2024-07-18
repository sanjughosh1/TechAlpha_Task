import React from 'react';
import banner from '/banners/smallbanner1.jpg';

const SignUpForm = () => {
  return (

       <div className="max-w-md pb-2 w-full bg-white shadow-lg rounded-lg border-t-4 border-gray-500 relative transform hover:scale-105 transition-transform duration-300">
      <img
        src={banner}
        alt="Sign Up"
        className="w-full h-32 object-cover rounded-md mb-4"
      />
        <form className='m-8'>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="shadow-inner appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-inner appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-inner appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
            <a href="#" className="inline-block align-baseline font-bold text-sm p-2 text-green-500 hover:text-green-800">
              Already have an account?
            </a>
          </div>
        </form>
      </div>
  );
}

export default SignUpForm;
