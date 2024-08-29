import React from 'react';
import { FcBinoculars } from "react-icons/fc";


const jobs = [
    { title: 'Full Stack Developer', jobsCount: '285k' },
    { title: 'Mobile Developer', jobsCount: '28k' },
    { title: 'Frontend Developer', jobsCount: '218k' },
    { title: 'DevOps Engineer', jobsCount: '120k' },
    { title: 'Engineering Manager', jobsCount: '158k' },
    { title: 'Technical Lead', jobsCount: '145k' },
    { title: 'Product Manager', jobsCount: '80k' },
    { title: 'Cloud Engineer', jobsCount: '95k' },
];

const JobCarousel = () => {

  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex items-center p-5 rounded-lg bg-fuchsia-200 justify-center">
        <div className="hidden h-[25rem] sm:block bg-fuchsia-400 p-5 rounded-l-lg">
          <div className="flex flex-col items-center">
            <FcBinoculars className='h-[10rem] w-[10rem]' />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Discover jobs across popular roles</h2>
              <p className="text-sm text-gray-600">
                Select a role and we'll show you relevant jobs for it!
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center bg-blue-200 rounded-lg shadow-lg p-5">
          
          <div className="grid grid-cols-2 overflow-hidden w-[30rem] h-5/6  gap-4 px-10">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="border rounded-md p-4 text-center hover:bg-gray-50"
              >
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-gray-500 text-sm">{job.jobsCount}+ Jobs</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default JobCarousel;
