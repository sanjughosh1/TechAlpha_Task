import React from 'react';
import bannerImage from '/banners/banner2.jpg';
import { Link } from "react-router-dom";

const NavBanner = ({ onLoginClick, onSignUpClick }) => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-balance">
                <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">
                    <div className="flex items-center space-x-4">
                        <Link to={"/"}  className="text-white hover:underline">Home</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#" onClick={onLoginClick} className="text-white hover:underline shadow-lg px-4 py-2 rounded-full bg-transparent border border-gray-200">Log in</a>
                        <a href="#" onClick={onSignUpClick} className="text-white hover:underline shadow-lg px-4 py-2 rounded-full bg-transparent border border-gray-200">Sign up</a>
                    </div>
                </nav>
                    <section className="text-center py-16 text-white">
                        <h2 className="text-4xl font-bold">Register your restaurant on <span className='text-5xl text-red-200'>Tomato</span></h2>
                        <p className="mt-4 text-xl">for free and get more customers!</p>
                      <div className="mt-6 space-x-4">
                        <button className="px-6 py-2 bg-blue-500 text-white rounded-full">Register your restaurant</button>
                        <button className="px-6 py-2 bg-transparent border border-blue-500 text-blue-500 rounded-full">Restaurant already listed? Claim now</button>
                      </div>
                    </section>    
            </div>
            
        </div>
    );
};

export default NavBanner;
