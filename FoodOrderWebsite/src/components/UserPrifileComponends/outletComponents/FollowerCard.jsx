import React from 'react';

const FollowerCard = () => {
  const followers = [
    {
      name: 'John Doe',
      image: '/images/d1.jpg',
    },
    {
      name: 'Jane Smith',
      image: '/images/d3.jpg',
    },
    {
      name: 'Alex Johnson',
      image: '/images/d2.jpg',
    },
    {
      name: 'Chris Lee',
      image: '/images/d1.jpg',
    },
    {
        name: 'Chris Lee',
        image: '/images/d1.jpg',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Followers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {followers.map((follower, index) => (
            <div key={index} className="flex items-center p-4 bg-white shadow-lg rounded-lg">
                <img src={follower.image} alt={follower.name} className="w-16 h-16 rounded-full object-cover" />
                <div className="ml-4">
                  <h2 className="text-lg font-bold">{follower.name}</h2>
                </div>
            </div>
             ))}
      </div>
    </div>
  );
};

export default FollowerCard;
    