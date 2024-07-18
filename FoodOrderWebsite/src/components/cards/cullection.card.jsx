import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Order Online', image: '/images/cathcthematch.jpg', link: '/OrderOnline/delivery' },
  { name: 'Dining Out', image:  '/images/newintown.jpg', link: '/OrderOnline/dining' },
  { name: 'Pro and Pro Plus', image: '/images/trendingthisweek.jpg', link: '/OrderOnline/nightlife' },
  { name: 'Night Life and Clubs', image: '/images/callingallbarhoppers.jpg', link: '/OrderOnline/nightlife' },
];

const CategoryCards = () => {
  return (
    <div className="flex justify-around gap-4">
      {categories.map((category, index) => (
        <Link key={index} to={category.link} className="w-1/4 flex flex-col items-center bg-white shadow-md rounded-lg transform transition-transform hover:scale-105">
            <img src={category.image} alt={category.name} className="h-full w-full rounded-xl" />
            <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
            <p className="text-center bg-transparent text-white absolute bottom-1 font-semibold">{category.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCards;
