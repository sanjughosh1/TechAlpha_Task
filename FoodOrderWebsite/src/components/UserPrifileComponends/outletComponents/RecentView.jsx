import React from 'react';

const RecentView = () => {

  const recentViews = [
    {
      name: 'Pizza Palace',
      image: '/images/Food/pizza.png',
    },
    {
      name: 'Burger Haven',
      image: '/images/Food/biryani2.png',
    },
    {
      name: 'Sushi World',
      image: '/images/Food/kfc.png',
    },
    {
      name: 'Pasta Place',
      image: '/images/Food/fish.png',
    },
    {
      name: 'Taco Town',
      image: '/images/Food/chapathi.png',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recently Viewed</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recentViews.map((recentView, index) => (
          <div key={index} className="flex items-center p-4 bg-white shadow-lg rounded-lg">
            <img src={recentView.image} alt={recentView.name} className="w-16 h-16 rounded-full object-cover" />
            <div className="ml-4">
              <h2 className="text-lg font-bold">{recentView.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentView;
