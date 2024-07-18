import React from 'react';
import Gstore from '/icons/playstore.png';
import Appstore from '/icons/appstore.png';

import Facebook from '/images/facebook.png'
import Twitter from '/images/twitter.png'
import Instagram from '/images/instagram.png'
import Linkedin from '/images/linkedin.png'
import Youtube from '/images/youtube.png'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Delicious</h1>
        <div className="flex flex-wrap justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">Tomato</h2>
            <ul>
              <li><a href="#" className="hover:underline">about us</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Work With Us</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Report Fraud</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Tomaverse</h2>
            <ul>
              <li><a href="#" className="hover:underline">Tomato</a></li>
              <li><a href="#" className="hover:underline">Feeding India</a></li>
              <li><a href="#" className="hover:underline">Hyperpure</a></li>
              <li><a href="#" className="hover:underline">Tomaland</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">For Restaurants</h2>
            <ul>
              <li><a href="#" className="hover:underline">Partner With Us</a></li>
              <li><a href="#" className="hover:underline">Apps For You</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">For Enterprises</h2>
            <ul>
              <li><a href="#" className="hover:underline">Tomato For Work</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Learn More</h2>
            <ul>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Security</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-8">
          <div className="flex space-x-4">
            <a href="#" className="hover:underline"><img src={Facebook} alt="Facebook" className='w-6' /></a>
            <a href="#" className="hover:underline"><img src={Linkedin} alt="LinkedIn" className='w-6'/></a>
            <a href="#" className="hover:underline"><img src={Instagram} alt="Instagram" className='w-6'/></a>
            <a href="#" className="hover:underline"><img src={Twitter} alt="Twitter" className='w-6'/></a>
            <a href="#" className="hover:underline"><img src={Youtube} alt="YouTube" className='w-6'/></a>
          </div>
          <div className="flex space-x-4">
            <a href="#"><img src={Gstore} alt="Get it on Google Play" className='h-9 rounded-l'/></a>
            <a href="#"><img src={Appstore} alt="Download on the App Store"  className='h-9 rounded-l' /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Tomato™ Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
