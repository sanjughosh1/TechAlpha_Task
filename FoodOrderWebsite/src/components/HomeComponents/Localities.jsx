import React from 'react';

const localities = [
  { name: 'Jubilee Hills', places: '421 Places' },
  { name: 'Banjara Hills', places: '352 Places' },
  { name: 'Madhapur', places: '298 Places' },
  { name: 'Gachibowli', places: '276 Places' },
  { name: 'Hitech City', places: '238 Places' },
  { name: 'Kondapur', places: '198 Places' },
  // Add more localities as needed
];

const Localities = () => {
  return (
    <div className="m-14">
      <h2 className="text-2xl font-semibold mb-4">Popular localities in and around <span className="font-bold">Hyderabad</span></h2>
      <div className="grid grid-cols-3 gap-4">
        {localities.slice(0, 5).map((locality, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{locality.name}</h3>
              <p className="text-sm text-gray-500">{locality.places}</p>
            </div>
            <span className="text-gray-400">{'>'}</span>
          </div>
        ))}
        <div className="p-4 border border-gray-200 rounded-lg shadow-sm flex justify-center items-center">
          <span className="text-blue-600 cursor-pointer">see more</span>
        </div>
      </div>
    </div>
  );
};

export default Localities;
