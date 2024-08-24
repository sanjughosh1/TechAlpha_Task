import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Left section */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <img
              src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" // Replace with your logo link
              alt="Logo"
              className="h-8 mb-4"
            />
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Center section */}
          <div className="w-full lg:w-2/4 mb-6 lg:mb-0 flex justify-around">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Company</h3>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-gray-900">About us</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Employer login</a></li>
                <li><a href="#" className="hover:text-gray-900">Sitemap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Help</h3>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900">Safety</a></li>
                <li><a href="#" className="hover:text-gray-900">Report Issue</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Terms</h3>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-gray-900">Fraud alert</a></li>
                <li><a href="#" className="hover:text-gray-900">Trust & Safety</a></li>
              </ul>
            </div>
          </div>

          {/* Right section */}
          <div className="w-full lg:w-1/4 flex flex-col items-center">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Apply on the go</h3>
            <p className="text-gray-500 mb-4">Get real-time job updates on our App</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Google Play">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
              <a href="#" aria-label="App Store">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/70/App_Store_%28iOS%29.svg"
                  alt="App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
