import React from 'react';

const MenuComponent = () => {
  const menus = [
    {
      title: 'Menu',
      pages: 23,
      image: '/images/menucard.png',
    },
    {
      title: 'Menu Card',
      pages: 12,
      image: '/images/menucard.png',
    },
    // Add more menu items as needed
  ];

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Krupa Mess & Tiffins Menu</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {menus.map((menu, index) => (
        <div
          key={index}
          className="relative transform-gpu transition-transform duration-300 hover:rotate-0 hover:shadow-2xl"
        >
          <div className="transform-gpu rotate-y-6 shadow-xl bg-white p-4 rounded-lg">
            <img src={menu.image} alt={menu.title} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-lg font-bold mt-2">{menu.title}</h2>
            <p className="text-gray-600">{menu.pages} Pages</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default MenuComponent;
