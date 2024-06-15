import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-gray-400">
              We are a company dedicated to providing the best services for our customers. Our mission is to deliver quality and satisfaction.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="/" className="hover:underline">Home</a></li>
              <li className="mb-2"><a href="/about" className="hover:underline">About</a></li>
              <li className="mb-2"><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
            <p className="text-gray-400">Address: 123 Street, City, Country</p>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">&copy; 2024 MyApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
