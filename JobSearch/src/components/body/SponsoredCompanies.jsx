import React from 'react';
import exploreData from "../../Data/exploreData.json"

const SponsoredCompanies = () => {
  return (
    <div className="my-8">
      <h3 className="text-2xl text-center font-bold m-16">Sponsored Companies</h3>
      <div className="grid grid-cols-6 gap-4 m-10">
        {exploreData.SponceredCompanies.map((company, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 bg-white text-center hover:shadow-md"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h4 className="font-semibold">{company.name}</h4>
            <p className="text-sm text-gray-600">{company.reviews} reviews</p>
            <p className="text-xs text-gray-500">{company.description}</p>
            <a href="#" className="mt-2 inline-block text-blue-600 font-semibold">
              View jobs
            </a>
          </div>
        ))}
      </div>
      <button className='font-bold relative left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-center rounded-2xl text-white bg-blue-500 p-4 m-6'>Find more ...</button>
    </div>
  );
};

export default SponsoredCompanies;
