import React from 'react';
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  const suggestedFoodies = [
    {
      name: 'Koushil Mankali',
      reviews: 200,
      followers: 123,
      imageUrl: '/images/laptop1.jpg',
    },
    {
      name: 'Koushil Mankali',
      reviews: 200,
      followers: 123,
      imageUrl: '/images/laptop1.jpg',
    },
    {
      name: 'Koushil Mankali',
      reviews: 200,
      followers: 123,
      imageUrl: '/images/laptop1.jpg',
    },
    {
      name: 'Koushil Mankali',
      reviews: 200,
      followers: 123,
      imageUrl: '/images/laptop1.jpg',
    },
  ];

  return (
    <div className="w-64 p-4 bg-gray-100">
      <ul>
        <li className="font-bold text-lg">Activity</li>
        <ul className="pl-4">
          <li><NavLink
              to="Reviews"
              className={({isActive}) =>`relative flex items-center text-gray-800
               font-semibold ${isActive? "text-red-400 bg-white rounded" : "text-gray-800"} px-4 py-2`}>              
              Reviews
            </NavLink>
          </li>
          <li><NavLink
              to="Followers"
              className={({isActive}) =>`relative flex items-center text-gray-800
               font-semibold ${isActive? "text-red-400 bg-white rounded" : "text-gray-800"} px-4 py-2`}>              
              Followers
            </NavLink>
          </li>
          <li><NavLink
              to="RecentlyViewed"
              className={({isActive}) =>`relative flex items-center text-gray-800
               font-semibold ${isActive? "text-red-400 bg-white rounded" : "text-gray-800"} px-4 py-2`}>              
              Recently Viewed
            </NavLink>
          </li>
          <li><NavLink
              to="Bookmarks"
              className={({isActive}) =>`relative flex items-center text-gray-800
               font-semibold ${isActive? "text-red-400 bg-white rounded" : "text-gray-800"} px-4 py-2`}>              
              Bookmarks
            </NavLink>
          </li>
          <li><NavLink
              to="BlogPosts"
              className={({isActive}) =>`relative flex items-center text-gray-800
               font-semibold ${isActive? "text-red-400 bg-white rounded" : "text-gray-800"} px-4 py-2`}>              
              Blog Posts
            </NavLink>
          </li>
        </ul>
        <li className="font-bold text-lg mt-4">Online Ordering</li>
        <ul className="pl-4">
        <li><NavLink
              to="OrderHistory"
              className={({isActive}) =>`relative flex items-center text-gray-800
               font-semibold ${isActive? "text-red-400 bg-white rounded" : "text-gray-800"} px-4 py-2`}>              
              Order History
            </NavLink>
          </li>
          <li><NavLink
              to="MyAddress"
              className={({isActive}) =>`relative flex items-center text-gray-800
               font-semibold ${isActive? "text-red-400 bg-white rounded" : "text-gray-800"} px-4 py-2`}>              
              My Address
            </NavLink>
          </li>
          <li><NavLink
              to="FavoriteOrders"
              className={({isActive}) =>`relative flex items-center text-gray-800
               font-semibold ${isActive? "text-red-400 bg-white rounded" : "text-gray-800"} px-4 py-2`}>              
              Favorite Orders
            </NavLink>
          </li>
        </ul>
        <li className="font-bold text-lg mt-4">Table Booking</li>
        <ul className="pl-4">
        <li><NavLink
              to="YourBooking"
              className={({isActive}) =>`relative flex items-center text-gray-800
               font-semibold ${isActive? "text-red-400 bg-white rounded" : "text-gray-800"} px-4 py-2`}>              
              Your Booking
            </NavLink>
          </li>
        </ul>
      </ul>
      <div className="mt-8 overflow-hidden">
        <h3 className="font-bold text-lg">Suggested Foodies to Follow</h3>
        <ul className='w-64'>
          {suggestedFoodies.map((foodie,index) => (
            <li key={index} className="flex items-center space-x-4 mt-4">
              <img src={foodie.imageUrl} alt={foodie.name} className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-bold">{foodie.name}</h4>
                <p>{foodie.reviews} Reviews • {foodie.followers} Followers</p>
              </div>
              <button className="ml-auto text-red-500">+</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="font-bold text-lg">Zomato Profile Widget</h3>
        <div className="flex items-center space-x-4 mt-4">
          <img src="/images/logo.jpeg" alt="Foodie" className="w-12 h-12 rounded-full" />
          <div>
            <p className="font-bold">Koushil</p>
            <p>0 Reviews</p>
            <p>0 Photos</p>
            <p>0 Followers</p>
            <button className="mt-2 bg-red-500 text-white px-4 py-1 rounded">Get this widget</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
