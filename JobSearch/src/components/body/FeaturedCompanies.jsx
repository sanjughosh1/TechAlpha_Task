import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import exploreData from '../../Data/exploreData.json'; 

const FeaturedCompanies = () => {
  const scroll = (direction) => {
    const container = document.getElementById('featured-companies-scroll');
    const scrollAmount = 400;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="py-8">
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
        Featured companies actively hiring
      </h2>
      <div className="relative bg-transparent flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-400 rounded-full p-2 mx-5 shadow-lg"
        >
          <FaArrowLeft/>
        </button>

        {/* Scrollable Container */}
        <div
          id="featured-companies-scroll"
          className="flex bg-slate-600 space-x-4 w-screen overflow-x-hidden p-5"
        >
          {exploreData.featuredCompanies.map((company, index) => (
            <a
              key={index}
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center w-64 flex-shrink-0"
            >
              <img
                    key={index}
                    src={company.logo} // Use the actual company logo URL
                    alt={company.name}
                    className="h-10 w-10 object-contain m-2"
                  />
              <h3 className="text-lg font-semibold text-gray-800">
                {company.name}
              </h3>
              <p className="text-yellow-500">{company.rating} &#9733;</p>
              <p className="text-gray-500">{company.reviews} reviews</p>
            </a>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-lg"
        >
          <FaArrowRight/>
        </button>
      </div>
    </div>
  );
};

export default FeaturedCompanies;
