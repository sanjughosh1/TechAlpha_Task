import React from 'react';
import { FcTemplate } from "react-icons/fc";

const roles = [
  { title: 'Full Stack Developer' },
  { title: 'Mobile Developer' },
  { title: 'Frontend Developer' },
  { title: 'DevOps Engineer' },
  { title: 'Engineering Manager' },
  { title: 'Technical Lead' },
];

const PopularRoles = () => {
  return (
    <div className="bg-[#d2d5d8] p-6 rounded-lg flex items-center justify-around">
      <div className="flex flex-col items-center justify-center">
      <FcTemplate className='h-[15rem] w-[15rem]'/> 
        <h2 className="text-2xl text-white font-bold">Discover jobs across popular roles</h2>
        <p className="text-white">
          Select a role and we'll show you relevant jobs for it!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {roles.map((role, index) => (
          <a
            key={index}
            href="#"
            className="block border rounded-md p-4 bg-white hover:shadow-md"
          >
            {role.title} →
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularRoles;
