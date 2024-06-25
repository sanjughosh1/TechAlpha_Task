import React, { useState } from 'react';


const Header = ({ onRegisterClick,onLoginClick }) => {
  return (
    <header className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8" /> */}
        <span className="text-white text-2xl">Job Search App</span>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={onRegisterClick} className="rounded-xl hover:bg-white hover:text-blue-600 text-white p-2 mr-2">Register</button>
        <button onClick={onLoginClick} className="rounded-xl hover:bg-white hover:text-blue-600 text-white p-2">Login</button>
      </div>
      
    </header>
  );
};

export default Header;
