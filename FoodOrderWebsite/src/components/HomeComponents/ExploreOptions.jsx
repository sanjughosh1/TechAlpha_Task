import React from 'react';

const ExploreOptions = () => {
  return (
    <div className="m-14 ">
      <h2 className="text-2xl font-semibold mb-4">Explore options near me</h2>
      <div className="space-y-4">
        <div className="relative">
          <select className="block appearance-none w-full bg-white border border-gray-200 hover:border-gray-300 rounded-lg py-4 px-6 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Top Restaurant Chains</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
          </div>
        </div>
        <div className="relative">
          <select className="block appearance-none w-full bg-white border border-gray-200 hover:border-gray-300 rounded-lg py-4 px-6 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Cities We Deliver To</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreOptions;
