import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">MyApp</a>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white hover:text-gray-200">Home</a>
          <a href="/about" className="text-white hover:text-gray-200">About</a>
          <a href="/contact" className="text-white hover:text-gray-200">Contact</a>
        </div>
        <button 
          className="text-white md:hidden" 
          onClick={toggleMenu}
        >
          Menu
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex absolute right-0 bg-black p-7 m-5 mt-4 rounded-3xl flex-col space-y-2">
          <a href="/" className="text-white hover:text-gray-200">Home</a>
          <a href="/about" className="text-white hover:text-gray-200">About</a>
          <a href="/contact" className="text-white hover:text-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
 