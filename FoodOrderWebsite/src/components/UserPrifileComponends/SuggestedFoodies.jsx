// src/components/SuggestedFoodies.jsx
import React, { useRef } from 'react';

const SuggestedFoodies = () => {
  const foodies = [
    // Example foodie data
    {
      id: 1,
      name: 'Sanju Ghosh',
      reviews: 200,
      followers: 123,
      imageUrl: '/images/advertise_5_11zon.jpg',
    },
    {
      id: 2,
      name: 'Sanju Ghosh',
      reviews: 200,
      followers: 123,
      imageUrl: '/images/advertise_5_11zon.jpg',
    },
    {
      id: 3,
      name: 'Sanju Ghosh',
      reviews: 200,
      followers: 123,
      imageUrl: '/images/advertise_5_11zon.jpg',
    },
    {
      id: 4,
      name: 'Sanju Ghosh',
      reviews: 200,
      followers: 123,
      imageUrl: '/images/advertise_5_11zon.jpg',
    },
    {
      id: 5,
      name: 'Sanju Ghosh',
      reviews: 200,
      followers: 123,
      imageUrl: '/images/advertise_5_11zon.jpg',
    },
    {
      id: 6,
      name: 'Sanju Ghosh',
      reviews: 200,
      followers: 123,
      imageUrl: '/images/happyhours.jpg',
    },
    // Add more foodie objects here
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative p-4 w-4/5 bg-white mt-4">
      <h3 className="font-bold mb-4">Suggested Foodies to Follow</h3>
      <div className="flex items-center w-full relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 p-2 bg-transparent rounded-full shadow-md"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <img src="/images/Arrow-Left.png" alt="Scroll Left" className="h-3 w-3" />
        </button>
        <div
          ref={scrollRef}
          className="flex items-center w-5/6 m-3 p-3 overflow-hidden space-x-4"
        >
          {foodies.map((foodie) => (
            <div key={foodie.id} className="flex items-center m-3">
              <img src={foodie.imageUrl} alt={foodie.name} className="w-16 h-16 rounded-full" />
              <div className="ml-4 w-44">
                <h4 className="font-bold">{foodie.name}</h4>
                <p>{foodie.reviews} Reviews</p>
                <p>{foodie.followers} Followers</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute z-10 right-0 p-2 h-8 bg-transparent rounded-full shadow-md"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <img src="/images/Arrow-Right.png" alt="Scroll Right" className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

export default SuggestedFoodies;
