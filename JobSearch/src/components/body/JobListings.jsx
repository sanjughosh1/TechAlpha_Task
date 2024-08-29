import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import exploreData from '../../Data/exploreData.json';
import { FaFilter } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

const featuredCompanies = [
  'https://logo.clearbit.com/deloitte.com',
  'https://logo.clearbit.com/iqvia.com',
  'https://logo.clearbit.com/capgemini.com',
  'https://logo.clearbit.com/zf.com',
  'https://logo.clearbit.com/cyient.com',
  'https://logo.clearbit.com/coforge.com',
  'https://logo.clearbit.com/prodapt.com',
  'https://logo.clearbit.com/mindtree.com',
  'https://logo.clearbit.com/ibm.com',
];

const uniqueCompanies = [
  'All',
  ...new Set(exploreData.JobList.map((job) => job.company)),
];

const starRatings = ['All', 1, 2, 3, 4, 5];

const JobListings = () => {
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [selectedStars, setSelectedStars] = useState('All');
  const [jobTitle, setJobTitle] = useState('');
  const [isCompanyFilterOpen, setIsCompanyFilterOpen] = useState(false);

  useEffect(() => {
    console.log(`Selected Company: ${selectedCompany}`);
    console.log(`Selected Stars: ${selectedStars}`);
    console.log(`Job Title: ${jobTitle}`);
  }, [selectedCompany, selectedStars, jobTitle]);

  const filteredJobs = exploreData.JobList.filter((job) => {
    const companyMatch =
      selectedCompany === 'All' || job.company === selectedCompany;
    const starsMatch =
      selectedStars === 'All' || job.stars === selectedStars;
    const titleMatch =
      job.title.toLowerCase().includes(jobTitle.toLowerCase());
    return companyMatch && starsMatch && titleMatch;
  });

  return (
    <div className="flex flex-col lg:flex-row bg-gray-300 rounded-lg justify-around m-2">
      {/* Sidebar for Filters */}
      <div className="bg-white m-5 p-6 rounded-lg shadow-lg flex flex-col items-center w-full lg:w-1/4">
      {/* Filters */}
      <div className="w-full">
          <h3 className="text-lg font-semibold mb-2">Filter by Job Title</h3>
          <input
            type="text"
            placeholder="Search by title..."
            className="w-full p-2 border rounded mb-4"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          {/* Toggle Button for Company Filter */}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-600 transition duration-300"
            onClick={() => setIsCompanyFilterOpen(!isCompanyFilterOpen)}
          >
            {isCompanyFilterOpen ? <IoFilter/> : <FaFilter/>}
          </button>
          {/* Company Filter Form */}
          {isCompanyFilterOpen && (
            <div className="flex flex-wrap rounded-2xl bg-slate-300 absolute w-[20rem] h-[20rem] overflow-y-scroll shadow-xl p-5 gap-2 mb-4">
              {uniqueCompanies.map((company, index) => (
                <NavLink
                  key={index}
                  to="#"
                  className={`px-3 py-1 rounded-full border ${
                    selectedCompany === company
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setSelectedCompany(company)}
                >
                  {company}
                </NavLink>
              ))}
            </div>
          )}
          <h3 className="text-lg font-semibold mb-2">Filter by Stars</h3>
          <div className="flex flex-wrap gap-2">
            {starRatings.map((star, index) => (
              <NavLink
                key={index}
                to="#"
                className={`px-3 py-1 rounded-full border ${
                  selectedStars === star
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setSelectedStars(star)}
              >
                {star === 'All' ? 'All' : `${star} ⭐`}
              </NavLink>
            ))}
          </div>
        </div>

        <img
          src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
          alt="Avatar"
          className="w-32 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold mb-4 text-center">
          On registering, you can
        </h2>
        <ul className="list-none space-y-2 mb-6">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> Build your profile and let recruiters find you
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> Get job postings delivered right to your email
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> Find a job and grow your career
          </li>
        </ul>
        
        
      </div>

      {/* Job Listings */}
      <div className="h-[57rem] overflow-y-scroll m-3 space-y-4 w-full lg:w-1/2">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-500">
                {job.location} | {job.salary}
              </p>
              <p className="text-yellow-500 mt-2">⭐ {job.stars} stars</p>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-20">
            No jobs match the selected filters.
          </div>
        )}
      </div>

      {/* Featured Companies and Promotion */}
      <div className="space-y-6 m-5 w-full lg:w-1/4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold mb-4">
            See 171 jobs in Featured Companies
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {featuredCompanies.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Company Logo"
                className="w-24 h-24 object-contain"
              />
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h4 className="text-lg font-semibold">
            Get 3X more profile views from recruiters
          </h4>
          <p className="text-gray-600 mt-2">
            Increase your chances of callback with Naukri FastForward
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600 transition duration-300">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobListings;
