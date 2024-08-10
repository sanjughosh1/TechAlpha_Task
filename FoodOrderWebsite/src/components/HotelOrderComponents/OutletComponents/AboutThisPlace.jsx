import React from 'react';

const AboutThisPlace = () => {
  const menus = [
    { id: 1, title: 'Food Menu', pages: 23, imageUrl: "/images/food1.jpg" },
    { id: 2, title: 'Food Menu Card', pages: 30, imageUrl: "/images/food1.jpg" },
  ];

  const cuisines = ['North Indian', 'South Indian', 'East Indian', 'West Indian', 'Desserts'];
  const moreInfo = ['Breakfast', 'Family Friendly', 'Indoor Seating', 'Takeaway Available', 'Home Delivery'];

  return (
    <div className="flex">
      <div className="flex-1 mx-32">
        <h2 className="text-2xl font-bold mb-4">About this place</h2>
        <h3 className="text-xl font-semibold mb-2">Menu</h3>
        <div className="flex space-x-4 mb-4">
          {menus.map(menu => (
            <div key={menu.id} className="w-40">
              <img src={menu.imageUrl} alt={menu.title} className="w-full h-32 object-cover rounded" />
              <div className="text-center mt-2">
                <h4 className="font-semibold">{menu.title}</h4>
                <p>{menu.pages} Pages</p>
              </div>
            </div>
          ))}
          <a href="#see-all-menus" className="text-red-500 mt-12">See all menus</a>
        </div>
        <h3 className="text-xl font-semibold mb-2">Cuisines</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {cuisines.map(cuisine => (
            <span key={cuisine} className="px-3 py-1 bg-gray-200 rounded-full">{cuisine}</span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">People Say This Place Is Known For</h3>
        <p className="mb-4">Great Buffet Spread, Fusion Dishes, Ample Seating Area, Family Place, Family Crowd, Quantity</p>
        <h3 className="text-xl font-semibold mb-2">Average Cost</h3>
        <p className="mb-4">₹800 for two people (approx.)</p>
        <p className="text-gray-500 mb-4">Exclusive of applicable taxes and charges, if any</p>
        <a href="#cost-calculation" className="text-blue-500 mb-4 inline-block">How do we calculate cost for two?</a>
        <h3 className="text-xl font-semibold mb-2">More Info</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {moreInfo.map(info => (
            <span key={info} className="px-3 py-1 bg-green-200 rounded-full">{info}</span>
          ))}
        </div>
      </div>
      <div className="w-[20%] h-[30%] relative right-16 p-4 bg-gray-100 rounded">
        <h3 className="text-xl font-semibold mb-2">Call</h3>
        <p className="text-red-500 mb-4">+919988098812</p>
        <h3 className="text-xl font-semibold mb-2">Direction</h3>
        <div className="bg-yellow-200 h-24 mb-4"></div>
        <p className="mb-4">50000, kukatpally, Hyderabad, Telangana, India</p>
        <button className="bg-gray-200 px-4 py-2 rounded mb-2">Copy</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Direction</button>
      </div>
    </div>
  );
};

export default AboutThisPlace;
