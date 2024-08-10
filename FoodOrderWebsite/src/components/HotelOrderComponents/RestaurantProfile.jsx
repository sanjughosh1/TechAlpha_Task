import React from 'react';
import { NavLink } from 'react-router-dom';
import ImageGallery from './ImageGallery.jsx';
import RestaurantDetails from './ResturentDetales.jsx';

const RestaurantProfile = () => {
  return (
    <div className="container mx-auto p-4">
      <ImageGallery />
      <RestaurantDetails />
      <div className="mt-4 flex space-x-4 border-b border-gray-300 pb-2">
      <NavLink
       to="order-online"
       className={({isActive}) =>`relative flex items-center text-gray-800 font-semibold ${isActive ? "text-red-400 bg-gray-200 rounded" : "text-gray-800"} px-4 py-2`}>              
         Order Online
      </NavLink>
        <NavLink 
        to="overview" 
        className={({isActive})=>`relative flex items-center text-gray-800 ${isActive ?"text-red-400 bg-gray-200 rounded":"text-gray-800"} font-semibold px-4 py-2`}>
          Overview
        </NavLink>
        <NavLink 
        to="reviews" 
        className={({isActive})=>`relative flex items-center text-gray-800 ${isActive ?"text-red-400 bg-gray-200 rounded":"text-gray-800"} font-semibold px-4 py-2`}>
          Reviews
        </NavLink>
        <NavLink to="photos"
       className={({isActive})=>`relative flex items-center text-gray-800 ${isActive ?"text-red-400 bg-gray-200 rounded":"text-gray-800"} font-semibold px-4 py-2`}>
          Photos
        </NavLink>
        <NavLink 
          to="menu" 
          className={({isActive})=>`relative flex items-center text-gray-800 ${isActive ?"text-red-400 bg-gray-200 rounded":"text-gray-800"} font-semibold px-4 py-2`}>
          Menu
        </NavLink>
      </div>
    </div>
  );
};

export default RestaurantProfile;
