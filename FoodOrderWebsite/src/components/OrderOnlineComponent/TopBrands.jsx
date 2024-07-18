import React from 'react';

const TopBrands = () => {
  const brands = [
    { name: 'KFC', time: '45 min', imgSrc: '/icons/Brands/kfc.png' },
    { name: 'Pizza Hut', time: '35 min', imgSrc: '/icons/Brands/pizzahut.png' },
    { name: 'Scoops', time: '49 min', imgSrc: '/icons/Brands/scoops.png' },
    { name: 'KFC', time: '19 min', imgSrc: '/icons/Brands/kfc.png' },
    { name: 'Pizza Hut', time: '22 min', imgSrc: '/icons/Brands/pizzahut.png' },
  ];

  return (
    <section className="container mx-auto text-center">
      <h2 className="text-2xl font-semibold">Top brands for you</h2>
      <div className="flex justify-center mt-4 space-x-4">
        {brands.map((brand, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={brand.imgSrc} alt={brand.name} className="h-1/3 m-5 rounded-sm"/>
            <p className="mt-2">{brand.name}</p>
            <p className="text-sm text-gray-600">{brand.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopBrands;
