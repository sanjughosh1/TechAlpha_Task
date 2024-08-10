import React from 'react';

const MenuComponent = () => {
  const menus = [
    {
      title: 'new Dining',
      pages: 23,
      image: '/images/romanceintheair_1_11zon.jpg', 
    },
    {
     title: 'Menu Card',
     pages: 12,
     image: '/images/pro_6_11zon.jpg',
    },
    {
      title: 'Menu Card',
      pages: 12,
      image: '/images/happyhours.jpg',
    },
    {
      title: 'Menu Card',
      pages: 12,
      image: '/images/pro_6_11zon.jpg',
    },
    {
      title: 'Menu Card',
      pages: 12,
      image: '/images/n1.jpg',
    },
    {
      title: 'Menu Card',
      pages: 12,
      image: '/images/pro_6_11zon.jpg',
    },
    {
      title: 'Menu Card',
      pages: 12,
      image: '/images/happyhours.jpg',
    },
    {
      title: 'Menu Card',
      pages: 12,
      image: '/images/n1.jpg',
    },
    {
      title: 'Menu Card',
      pages: 12,
      image: '/images/fortheloveofbiryani.jpg',
    },
    {
      title: 'Menu Card',
      pages: 12,
      image: '/images/happyhours.jpg',
    },
    {
      title: 'Menu Card',
      pages: 12,
      image: '/images/orderonline.jpg',
    },
]
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Krupa Mess & Tiffins Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {menus.map((menu, index) => (
          <div key={index} style={{backgroundImage : `url(${menu.image})`}} className="border bg-cover bg-center p-4 h-[15rem] rounded-lg shadow-lg">
            <h2 className="text-lg text-white font-bold mt-2">{menu.title}</h2>
            <p className="text-gray-200 font-semibold">{menu.pages} Pages</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
