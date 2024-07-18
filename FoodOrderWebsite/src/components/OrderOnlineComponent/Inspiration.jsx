import React from 'react';

const Inspiration = () => {
  const items = [
    { name: 'Biryani', imgSrc: '/icons/Food/biryaniC.png' },
    { name: 'Burger', imgSrc: '/icons/Food/burger.png' },
    { name: 'Chicken', imgSrc: '/icons/Food/chicken.png' },
    { name: 'Fries', imgSrc: '/icons/Food/fries.png' },
    { name: 'Home Style', imgSrc: '/icons/Food/homestyle.png' },
  ];

  return (
    <section className="container mx-auto text-center py-8">
      <h2 className="text-3xl mb-4 font-semibold">Inspiration for your first order</h2>
      <div className="flex justify-center mt-4 overflow-x-auto space-x-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={item.imgSrc} alt={item.name} className="h-18 w-18 m-10 rounded-full"/>
            <p className="mt-2">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Inspiration;
