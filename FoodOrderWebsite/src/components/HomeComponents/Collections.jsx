import React from 'react';
import CollectionCards from '../cards/cullection.card.jsx';

const Collections = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Collections</h2>
      <p className="text-gray-600 mb-8">Explore curated lists of top restaurants, cafes, pubs, and bars in Hyderabad, based on trends.</p>
      
      <div className="flex justify-end mt-4">
        <a href="#" className="text-red-500 hover:underline">All collections in Hyderabad</a>
      </div>
      <CollectionCards />
    </div>
  );
};

export default Collections;
