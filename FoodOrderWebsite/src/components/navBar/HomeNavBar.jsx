import React, { useState } from 'react';
import bannerImage from '/banners/banner1.jpg'
import { Link } from 'react-router-dom';


const cities = [
  "Hyderabad",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Pune",
  "Jaipur",
  "Ahmedabad",
  "Surat",
];

const NavBanner = ({ onLoginClick, onSignUpClick,onGetMyAppClick }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
 

  const handleCityChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      const results = cities.filter(city =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(results);
    } else {
      setFilteredCities([]);
    }
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSearchTerm(city);
    setFilteredCities([]);
  };
 
 

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-balance">
        <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <a 
            href="#get-my-app"
            onClick={onGetMyAppClick}    // Scroll to GetMyApp component on click 
            className="text-white hover:underline">
              Get The App
            </a>
          </div>
          <div className="flex items-center space-x-4">
           <Link
           to ="/add-restaurant"
            className="text-white hover:underline">Add restaurant</Link>
            <a href="#"
             onClick={onLoginClick} 
             className="text-white hover:underline shadow-lg px-4 py-2 rounded-full bg-transparent border border-gray-200">
            Log in
        </a>
        <a 
        href="#"
        onClick={onSignUpClick} 
        className="text-white hover:underline shadow-lg px-4 py-2 rounded-full bg-transparent border border-gray-200">
            Sign up
        </a>
          </div>
        </nav>
        <h1 className="text-6xl text-white font-bold">Tomato</h1>
        <p className="text-2xl text-white mt-2">Discover the best food & drinks in <span className="font-bold">Hyderabad</span></p>
        <div className="mt-8 w-full  max-w-md">
          <div className="flex items-center z-0 bg-white rounded-full p-2 shadow-lg relative">
            <input
              type="text"
              placeholder="Place.."
              value={searchTerm}
              onChange={handleCityChange}
              className="flex-1 border-none px-4 py-2 rounded-l-full w-1/3"
            />
            {filteredCities.length > 0 && (
              <ul className="absolute top-12 left-0 right-0 bg-white border rounded-lg shadow-lg z-20">
                {filteredCities.map((city, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleCitySelect(city)}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
            <select className="border-none mx-2">
              <option>All</option>
              <option>Restaurant</option>
              <option>Cuisine</option>
              <option>Dish</option>
            </select>
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="flex-1 px-4 py-2 rounded-r-full border-none"
            />
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBanner;
