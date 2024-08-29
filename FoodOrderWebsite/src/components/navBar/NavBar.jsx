import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const cities = [
  "Hyderabad",
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Ahmedabad"
];

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setFilteredCities(
      cities.filter(city => city.toLowerCase().includes(query.toLowerCase()))
    );
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-100 via-white to-gray-100 p-4 shadow-xl flex justify-between items-center rounded-lg">
      <div className="text-2xl font-bold text-gray-800">Tomato</div>
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-gray-800 hover:text-red-400">Home</Link>
        <Link to="/add-restaurant" className="text-gray-800 hover:text-red-400">Add Restaurant</Link>
        <Link to="/OrderOnline/delivery" className="text-gray-800 hover:text-red-400">Order Online</Link>
        <Link to="/HotelOrder/order-online" className="text-gray-800 hover:text-red-400">Hotel Order</Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-inner relative border border-gray-200">
          <input
            type="text"
            placeholder="Place.."
            className="bg-transparent rounded-2xl border-none"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <span className="mx-2 ">|</span>
          <input
            type="text"
            placeholder="Search for restaurant"
            className="bg-transparent rounded-2xl border-none"
          />
          {searchQuery && filteredCities.length > 0 && (
            <div className="absolute top-10 left-0 bg-white border rounded-lg shadow-lg mt-2 w-full z-10">
              {filteredCities.map((city, index) => (
                <div key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <button 
            onClick={toggleProfileMenu} 
            className="text-gray-800 hover:bg-blue-800 hover:text-white shadow-lg px-4 py-2 rounded-full bg-white border border-gray-200 flex items-center"
          >
            <img src="/images/logo.jpeg" alt="Profile" className="w-6 h-6 rounded-full mr-2"/>
            Profile
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          {profileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
              <Link to="/UserProfile/Reviews" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
              <Link to="/notifications" className="block px-4 py-2 hover:bg-gray-100">Notifications</Link>
              <Link to="/bookmarks" className="block px-4 py-2 hover:bg-gray-100">Bookmarks</Link>
              <Link to="/UserProfile" className="block px-4 py-2 hover:bg-gray-100">Reviews</Link>
              <Link to="/network" className="block px-4 py-2 hover:bg-gray-100">Network</Link>
              <Link to="/find-friends" className="block px-4 py-2 hover:bg-gray-100">Find Friends</Link>
              <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
