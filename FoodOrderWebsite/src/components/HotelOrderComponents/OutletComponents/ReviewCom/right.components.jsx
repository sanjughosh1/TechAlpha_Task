// src/components/RightContent.jsx
import React, { useEffect, useRef } from 'react';

const RightContent = ({ selectedMenu }) => {
  const contentData = [
    {
      id: 'Recommended (5)',
      title: 'Hariyali Kebab',
      price: '₹1400',
      rating: 4,
      votes: 12,
      description: 'Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Sc...read more',
    },
    {
      id: 'Recommended (5)',
      title: 'Biryani',
      price: '₹900',
      rating: 5,
      votes: 20,
      description: 'Delicious biryani with rich flavors.',
    },
    {
      id: 'Indian (5)',
      title: 'Biryani',
      price: '₹900',
      rating: 5,
      votes: 20,
      description: 'Delicious biryani with rich flavors.',
    },
    {
      id: 'Biryanis (5)',
      title: 'Biryani',
      price: '₹900',
      rating: 5,
      votes: 20,
      description: 'Delicious biryani with rich flavors.',
    },
    {
      id: 'Tandoori (5)',
      title: 'Biryani',
      price: '₹900',
      rating: 5,
      votes: 20,
      description: 'Delicious biryani with rich flavors.',
    },
    {
      id: 'Tandoori (5)',
      title: 'Biryani',
      price: '₹900',
      rating: 5,
      votes: 20,
      description: 'Delicious biryani with rich flavors.',
    },
    {
      id: 'Tandoori (5)',
      title: 'Biryani',
      price: '₹900',
      rating: 5,
      votes: 20,
      description: 'Delicious biryani with rich flavors.',
    },
    {
      id: 'Tandoori (5)',
      title: 'Biryani',
      price: '₹900',
      rating: 5,
      votes: 20,
      description: 'Delicious biryani with rich flavors.',
    },
    // Add more items as needed
  ];

  const sectionsRef = useRef({});

  useEffect(() => {
    if (sectionsRef.current[selectedMenu]) {
      sectionsRef.current[selectedMenu].scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedMenu]);

  return (
    <div className="flex-1 ml-8 overflow-hidden h-[30rem]">
      {contentData.map((item) => (
        <div
          key={item.id}
          className="border p-4 rounded shadow-xl bg-gra mb-4"
          ref={(el) => (sectionsRef.current[item.id] = el)}
        >
          <h2 className="font-bold text-lg mb-4">{item.id}</h2>
          <h3 className="font-semibold">{item.title}</h3>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-2">{item.rating}⭐</span>
            <span className="text-gray-500">({item.votes} votes)</span>
          </div>
          <p className="text-lg font-semibold">{item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RightContent;
