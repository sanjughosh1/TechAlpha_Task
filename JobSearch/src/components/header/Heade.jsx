import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import jobData from "../../Data/job.json"; // Adjust the path if needed
import categories from "../../Data/categories.json";

const Header = () => {
  const [jobs, setJobs] = useState(jobData); // Initial job data
  const [query, setQuery] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobData); // State to hold filtered job data
  const [suggestions, setSuggestions] = useState([]); // State to hold job title suggestions
  const [locationSuggestions, setLocationSuggestions] = useState([]); // State to hold location suggestions


  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Filtering logic based on query, experience, and location
    const filteredJobs = jobData.filter((job) => {
      return (
        (query === "" || job.title.toLowerCase().includes(query.toLowerCase())) &&
        (experience === "" || job.experience === experience) &&
        (location === "" || job.location.toLowerCase().includes(location.toLowerCase()))
      );
    });
    setFilteredJobs(filteredJobs);
  }, [query, experience, location]);

  useEffect(() => {
    // Generate job title suggestions based on query
    if (query.length > 0) {
      const allTitles = jobData.map((job) => job.title.toLowerCase());
      const matchingTitles = allTitles.filter((title) => title.includes(query.toLowerCase()));
      setSuggestions(matchingTitles);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  useEffect(() => {
    // Generate location suggestions based on location input
    if (location.length > 0) {
      const allLocations = jobData.map((job) => job.location.toLowerCase());
      const matchingLocations = [...new Set(allLocations)].filter((loc) =>
        loc.includes(location.toLowerCase())
      );
      setLocationSuggestions(matchingLocations);
    } else {
      setLocationSuggestions([]);
    }
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Trigger search logic
    // Filtering logic is handled by useEffect

    // Clear input fields
    setQuery("");
    setExperience("");
    setLocation("");

    // Optionally, redirect or update the state to show search results
    // For example, you might redirect to a search results page or update another state
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]); // Clear suggestions after selection
  };

  const handleLocationSuggestionClick = (suggestion) => {
    setLocation(suggestion);
    setLocationSuggestions([]); // Clear location suggestions after selection
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        {/* Find Your Dream Job Section */}
        <div className="text-center py-8">
          <h1 className="text-2xl font-bold text-gray-800">Find your dream job now</h1>
          <p className="text-gray-500 mb-4">5 lakh+ jobs for you to explore</p>
          <div className="p-5 m-5 rounded-lg flex justify-center items-center bg-fuchsia-200 shadow-2xl">
          <form onSubmit={handleSearch} className="relative flex items-center space-y-4">
             {/* Combined Input Box */}
             <div className="relative w-full max-w-4xl bg-gray-200 rounded-lg shadow-xl flex items-center">
               <input
                 type="text"
                 placeholder="Enter skills / designations / companies"
                 className="px-4 py-3 border-none bg-transparent rounded-l-lg w-full outline-none placeholder-gray-500"
                 value={query}
                 onChange={(e) => setQuery(e.target.value)}
               />
               <select
                 className="px-4 py-3 border-none bg-transparent rounded-none outline-none"
                 value={experience}
                 onChange={(e) => setExperience(e.target.value)}
               >
                 <option value="">Select experience</option>
                 <option value="0-1 years">0-1 years</option>
                 <option value="1-3 years">1-3 years</option>
                 <option value="3-5 years">3-5 years</option>
                 <option value="5+ years">5+ years</option>
               </select>
               <input
                 type="text"
                 placeholder="Enter location"
                 className="px-4 py-3 border-none bg-transparent rounded-r-lg outline-none placeholder-gray-500"
                 value={location}
                 onChange={(e) => setLocation(e.target.value)}
               />
               <button
                 type="submit"
                 className="px-6 py-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
               >
                 Search
               </button>
             </div>
              
             {/* Job Title Suggestions Dropdown */}
             {suggestions.length > 0 && (
               <div className="absolute top-full left-0 w-[10rem] h-[10rem] overflow-hidden bg-white shadow-lg mt-1 rounded-lg z-10">
                 {suggestions.map((suggestion, index) => (
                   <div
                     key={index}
                     className="px-4 py-3 cursor-pointer hover:bg-gray-100"
                     onClick={() => handleSuggestionClick(suggestion)}
                   >
                     {suggestion}
                   </div>
                 ))}
               </div>
             )}
            
             {/* Location Suggestions Dropdown */}
             {locationSuggestions.length > 0 && (
               <div className="absolute top-full right-36 w-[10rem] h-[10rem] overflow-hidden bg-white shadow-lg mt-1 rounded-lg z-10">
                 {locationSuggestions.map((suggestion, index) => (
                   <div
                     key={index}
                     className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                     onClick={() => handleLocationSuggestionClick(suggestion)}
                   >
                     {suggestion}
                   </div>
                 ))}
               </div>
             )}
          </form>
           
          </div>
        </div>

        {/* Trending on Naukri Today Section */}
        <div className="py-8">
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">Trending on Naukri today</h2>
      <div className="relative flex bg-gray-300 shadow-xl justify-center items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 m-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-lg"
        >
          &larr;
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex justify-center items-center m-10 space-x-4 w-5/6 overflow-x-hidden scrollbar-hidden"
        >
          {categories.map((category, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-4 text-center w-40 flex-shrink-0">
              <img
                src={category.imgSrc}
                alt={category.alt}
                className="mx-auto h-12 mb-2"
              />
              <p className="text-gray-700 font-semibold">{category.title}</p>
              <p className="text-gray-500 text-sm">{category.jobs}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 m-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-lg"
        >
          &rarr;
        </button>
      </div>
    </div>

      </div>
    </header>
  );
};

export default Header;
