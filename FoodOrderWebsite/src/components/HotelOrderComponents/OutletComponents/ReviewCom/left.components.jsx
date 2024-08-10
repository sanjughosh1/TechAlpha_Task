// src/components/LeftMenu.jsx
import React from 'react';

const LeftMenu = ({ onSelect }) => {
  const menuItems = [
    'Recommended (5)',
    'Biryanis (5)',
    'Indian (5)',
    'Tandoori (5)',
    'Chinese (5)',
    'Noodles & Fried Rice (5)',
    'Soups (5)',
    'Roti (5)',
    'Dessert (5)',
  ];

  return (
    <div className="w-[20%] bg-gray-200 p-3 rounded-xl" >
      <h2 className="font-bold text-lg mb-4">Review</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="mb-2 hover:text-red-500 cursor-pointer"
            onClick={() => onSelect(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftMenu;
