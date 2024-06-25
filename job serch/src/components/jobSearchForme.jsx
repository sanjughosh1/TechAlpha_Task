import React, { useState } from 'react';

const JobSearchForm = ({ onSearch }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ title, location });
  };

  return (
    <>
    <div className='w-full flex justify-center m-4 p-2 rounded-2xl'>
    <form onSubmit={handleSubmit} className="flex justify-center w-80 flex-col mb-4">
      <div className="mb-2  ">
        <label className="block">Job Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border flex justify-center rounded-2xl p-2 w-80"
        />
      </div>
      <div className="mb-2">
        <label className="block">Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border flex justify-center rounded-2xl p-2 w-80"
        />
      </div>
      <button type="submit" className="bg-blue-600 rounded-2xl text-white p-2">Search</button>
    </form>
    </div>
    </>
  );
};

export default JobSearchForm;
