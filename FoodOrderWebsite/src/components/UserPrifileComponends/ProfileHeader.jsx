import React from 'react';
import bannerImg from "/images/profilebanner.jpg";

const ProfileHeader = () => {
  return (
    <div className="relative flex items-center h-fit bg-cover bg-center" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img src="/icons/Food/biryaniC.png" alt="Profile" className="w-48 h-48 mx-10 my-48 rounded-full relative z-10" />
      <div className="ml-4 text-white relative z-10">
        <h1 className="text-3xl font-bold p-2 rounded">Sanju ghosh</h1>
        <p className="text-xl p-1 rounded">kolkate</p>
        <div className="flex space-x-4 mt-2 bg-transparent">
          <span className="p-1 rounded">143 Reviews</span>
          <span className="p-1 rounded">|</span>
          <span className="p-1 rounded">18 Photos</span>
          <span className="p-1 rounded">|</span>
          <span className="p-1 rounded">1k Followers</span>
        </div>
      </div>
      <button className="ml-auto m-10 bg-red-500 text-white px-4 py-2 rounded relative z-10">Edit Profile</button>
    </div>
  );
};

export default ProfileHeader;
