import React from 'react';
import { Link } from "react-router-dom";

const restaurants = [
  {
    name: 'Paradise Hotel',
    rating: '3.6',
    price: '₹350 for One',
    imgSrc: '/images/Food/biryani.png',
    offer: '30% OFF',
    cuisine: 'South Indian',
    safetyInfo: '9000+ orders placed from here recently',
    to : "/UserProfile",

  },
  {
    name: 'Mangal Hotel',
    rating: '2.6',
    price: '₹350 for One',
    imgSrc: '/images/Food/biryani2.png',
    offer: '30% OFF',
    cuisine: 'South Indian',
    safetyInfo: '9000+ orders placed from here recently',
    to : "/UserProfile",
  },
  {
    name: 'Mangal Hotel',
    rating: '2.6',
    price: '₹350 for One',
    imgSrc: '/images/Food/chapathi.png',
    offer: '30% OFF',
    cuisine: 'South Indian',
    safetyInfo: '9000+ orders placed from here recently',
    to : "/UserProfile",
  },
  {
    name: 'Mangal Hotel',
    rating: '2.6',
    price: '₹350 for One',
    imgSrc: '/images/Food/chicken.png',
    offer: '30% OFF',
    cuisine: 'South Indian',
    safetyInfo: '9000+ orders placed from here recently',
    to : "/UserProfile",
  },
  {
    name: 'Mangal Hotel',
    rating: '2.6',
    price: '₹350 for One',
    imgSrc: '/images/Food/fish.png',
    offer: '30% OFF',
    cuisine: 'South Indian',
    safetyInfo: '9000+ orders placed from here recently',
    to : "/UserProfile",
  },
  {
    name: 'Mangal Hotel',
    rating: '2.6',
    price: '₹350 for One',
    imgSrc: '/images/Food/kfc.png',
    offer: '30% OFF',
    cuisine: 'South Indian',
    safetyInfo: '9000+ orders placed from here recently',
    to : "/UserProfile",
  },
  {
    name: 'Mangal Hotel',
    rating: '2.6',
    price: '₹350 for One',
    imgSrc: '/images/Food/pizza.png',
    offer: '30% OFF',
    cuisine: 'South Indian',
    safetyInfo: '9000+ orders placed from here recently',
    to : "/UserProfile",
  },
  {
    name: 'Mangal Hotel',
    rating: '2.6',
    price: '₹350 for One',
    imgSrc: '/images/Food/icecream.png',
    offer: '30% OFF',
    cuisine: 'South Indian',
    safetyInfo: '9000+ orders placed from here recently',
    to : "/UserProfile",
  },
  {
    name: 'Mangal Hotel',
    rating: '2.6',
    price: '₹350 for One',
    imgSrc: '/images/Food/biryani.png',
    offer: '30% OFF',
    cuisine: 'South Indian',
    safetyInfo: '9000+ orders placed from here recently',
    to : "/UserProfile",

  },
];

const DeliveryRestaurants = () => {
  return (
    <section className="container mx-auto py-8">
      <h2 className="text-4xl font-semibold mb-4">Delivery Restaurants in Gachibowli</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.map((restaurant, index) => (
          <Link to={restaurant.to} key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={restaurant.imgSrc} alt={restaurant.name} className="w-full h-52 object-cover"/>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                <span className="bg-green-500 text-lg flex justify-center rounded-xl px-5 py-2 text-white">
                  <img src="/icons/starGrIcon.png" className='p-1 h-8' />
                  {restaurant.rating}</span>
              </div>
              <p className="text-gray-700">{restaurant.price}</p>
              <p className="text-sm text-green-600">{restaurant.offer}</p>
              <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
              <p className="text-sm text-gray-600">{restaurant.safetyInfo}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default DeliveryRestaurants;
