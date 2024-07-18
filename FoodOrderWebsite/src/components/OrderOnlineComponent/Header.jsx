import React, { useState } from 'react';
import {Link, NavLink } from 'react-router-dom';
import dinning2 from '/icons/dinning2.png';
import nightLife2 from '/icons/nightlife2.png';
import delivery2 from '/icons/delivery2.png';

const Header = () => {
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState([
    'Delivery Time',
    'Pure Veg',
    'Rating: 4.0+',
    'Great Offers',
    'Cuisines'
  ]);

  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const handleRemoveCategory = (categoryToRemove) => {
    setCategories(categories.filter(category => category !== categoryToRemove));
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4">
        <nav className="space-x-4">
          <Link to="/" className="text-gray-800 font-semibold">Home</Link>
        </nav>
      </div>
      <div className="container mx-auto flex justify-between py-4 relative">
        <div className="flex space-x-4">
          <div>
            <NavLink
              to="delivery"
              className={({isActive}) =>`relative flex items-center text-gray-800  lg:hover:bg-transparent font-semibold 
              ${isActive ? "text-red-400" : "text-gray-800"} px-4 py-2`}>
              <img src={delivery2} className='w-10 m-2' />
              Delivery
            </NavLink>
           
          </div>
          <div>
            <NavLink
              to="dining"
              className={({isActive}) =>`relative flex items-center text-gray-800
              lg:hover:bg-transparent font-semibold 
                ${isActive? "text-red-400" : "text-gray-800"} px-4 py-2`}>              
            
              <img src={dinning2} className='w-10 m-2'/>
              Dining
            </NavLink>
            
          </div>
          <div>
            <NavLink
              to="nightlife"
              className={({isActive}) =>`relative flex items-center text-gray-800 lg:hover:bg-transparent font-semibold 
                ${isActive? "text-red-400" : "text-gray-800"} px-4 py-2`}>
              <img src={nightLife2} className='w-10 m-2'/>
              Nightlife
            </NavLink>
            
          </div>
        </div>
        <button
          onClick={toggleFilterDropdown}
          className="px-4 py-2 rounded-full"
        >
          Filter
        </button>
        {isFilterDropdownOpen && (
          <div className="absolute right-0 bg-white w-1/4 border rounded-lg shadow-lg z-10">
            <div className="flex justify-end p-2">
              <button onClick={toggleFilterDropdown} className="text-red-500">&times;</button>
            </div>
            <div className="flex flex-wrap p-4 space-x-2">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <button className="px-4 py-2 rounded-full border border-gray-300">{category}</button>
                  <button
                    onClick={() => handleRemoveCategory(category)}
                    className="text-red-500"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            <div className="p-4 flex space-x-2 w-1/2">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="New category"
                className="flex-1 px-4 py-2 border rounded-full"
              />
              <button
                onClick={handleAddCategory}
                className="px-4 py-2 bg-blue-500 text-white rounded-full"
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
