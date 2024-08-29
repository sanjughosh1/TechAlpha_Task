import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../forms/login";
import RegisterForm from "../forms/Register";

const Navbar = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <nav className="flex justify-between h-[5rem] items-center mx-10 py-4 relative">
      {/* Logo */}
      <Link to={"/"} className="flex items-center">
        <img
          src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
          alt="Logo"
          className="h-8"
        />
      </Link>
      {/* Nav Links */}
      <div className="hidden md:flex space-x-6">
        <Link
          to="/jobs"
          className="text-gray-700 hover:text-gray-900"
          onMouseEnter={() => handleMouseEnter("jobs")}
          onMouseLeave={handleMouseLeave}
        >
          Jobs
          <div className="h-1 bg-transparent"></div>
        </Link>
        <Link
          to="/"
          className="text-gray-700 hover:text-gray-900"
          onMouseEnter={() => handleMouseEnter("companies")}
          onMouseLeave={handleMouseLeave}
        >
          Companies
        </Link>
        <a
          href="https://resume.naukri.com/?fftid=100001"
          target="_blank"
          className="text-gray-700 hover:text-gray-900"
          onMouseEnter={() => handleMouseEnter("services")}
          onMouseLeave={handleMouseLeave}
        >
          Services
        </a>
        <Link
          to="/"
          className="text-gray-700 hover:text-gray-900"
          onMouseEnter={() => handleMouseEnter("resources")}
          onMouseLeave={handleMouseLeave}
        >
          Resources

        </Link>
      </div>

      {/* Hover Dropdowns with 3 Columns */}
      {hoveredLink === "jobs" && (
        <div
          className="absolute top-11 left-56 mt-2 p-6 bg-gray-100 shadow-lg rounded-lg w-[30rem] z-50 transition-opacity duration-200 ease-in"
          onMouseEnter={() => handleMouseEnter("jobs")}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className="font-semibold mb-4">Explore Jobs</h3>
          <ul className="grid grid-cols-3 gap-4">
            <li><Link to="/category/tech">Tech Jobs</Link></li>
            <li><Link to="/category/marketing">Marketing Jobs</Link></li>
            <li><Link to="/category/sales">Sales Jobs</Link></li>
            <li><Link to="/category/finance">Finance Jobs</Link></li>
            <li><Link to="/category/healthcare">Healthcare Jobs</Link></li>
            <li><Link to="/category/education">Education Jobs</Link></li>
            <li><Link to="/category/design">Design Jobs</Link></li>
            <li><Link to="/category/management">Management Jobs</Link></li>
            <li><Link to="/category/operations">Operations Jobs</Link></li>
          </ul>
        </div>
      )}

      {hoveredLink === "companies" && (
        <div
          className="absolute top-11 left-60 mt-2 p-6 bg-gray-100 shadow-lg rounded-lg w-[30rem] z-50 transition-opacity duration-200 ease-in"
          onMouseEnter={() => handleMouseEnter("companies")}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className="font-semibold mb-4">Explore Companies</h3>
          <ul className="grid grid-cols-3 gap-4">
            <li><Link to="/company/unicorn">Unicorn</Link></li>
            <li><Link to="/company/mnc">MNC</Link></li>
            <li><Link to="/company/startup">Startup</Link></li>
            <li><Link to="/company/product-based">Product Based</Link></li>
            <li><Link to="/company/internet">Internet</Link></li>
            <li><Link to="/company/fintech">Fintech</Link></li>
            <li><Link to="/company/consulting">Consulting</Link></li>
            <li><Link to="/company/e-commerce">E-commerce</Link></li>
            <li><Link to="/company/education">Education</Link></li>
          </ul>
        </div>
      )}

      {hoveredLink === "resources" && (
        <div
          className="absolute top-10 right-60 mt-2 p-6 bg-gray-100 shadow-lg rounded-lg w-[30rem] z-50 transition-opacity duration-200 ease-in"
          onMouseEnter={() => handleMouseEnter("resources")}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="grid grid-cols-3 gap-4">
            <li><Link to="/interview-prep">Interview Prep</Link></li>
            <li><Link to="/salary-guide">Salary Guide</Link></li>
            <li><Link to="/job-alerts">Job Alerts</Link></li>
            <li><Link to="/career-growth">Career Growth Tips</Link></li>
            <li><Link to="/industry-trends">Industry Trends</Link></li>
            <li><Link to="/networking">Networking Tips</Link></li>
          </ul>
        </div>
      )}

      {/* Right Section */}
      <div className="flex justify-center items-center bg-gray-100 space-x-4">
        <button
          onClick={openRegister}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Register
        </button>
        <button
          onClick={openLogin}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Login
        </button>

        {isRegisterOpen && <RegisterForm onClose={closeRegister} />}
        {isLoginOpen && <LoginForm onClose={closeLogin} />}
      </div>
    </nav>
  );
};

export default Navbar;
