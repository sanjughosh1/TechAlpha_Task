import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import exploreData from '../../Data/exploreData.json'; // Adjust the path to your JSON file

const ExploreTopCompanies = () => {
  const scroll = (direction) => {
    const container = document.getElementById('explore-companies-scroll');
    const scrollAmount = 200;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="py-8">
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
        Explore top companies hiring now
      </h2>
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-lg"
        >
          <FaArrowLeft/>
        </button>

        {/* Scrollable Container */}
        <div
          id="explore-companies-scroll"
          className="flex p-5 space-x-4 overflow-x-hidden rounded-lg m-5"
        >
          {exploreData.exploreTopCompanies.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 text-center w-64 flex-shrink-0"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {category.title}
              </h3>
              <p className="text-gray-500 mb-4">{category.jobs}</p>
              <div className="flex justify-center space-x-2">
                {category.companies.map((company, idx) => (
                  <a
                  key={idx}
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    key={idx}
                    src={company.logo} // Use the actual company logo URL
                    alt={company.name}
                    className="h-10 w-10 object-contain m-2"
                  />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-lg"
        >
          <FaArrowRight/>
        </button>
      </div>
    </div>
  );
};

export default ExploreTopCompanies;
