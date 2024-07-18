import React from 'react';
import bannerImage from '/images/addressbackground.jpg';

const FindRestaurant = () => {
    return (
        <section className="text-center py-16 bg-gray-100 mb-5  bg-cover bg-center"  style={{ backgroundImage: `url(${bannerImage})`}}>
            <h2 className="text-4xl font-bold">Cannot find your favourite restaurant on Tomato?</h2>
            <p className="mt-4 text-xl">Submit the details and our team will get the restaurant onboard</p>
            <form className="mt-8 space-y-4 max-w-md mx-auto">
                <input type="text" placeholder="Restaurant name*" className="w-full px-4 py-2 border rounded-full" />
                <input type="text" placeholder="Restaurant location*" className="w-full px-4 py-2 border rounded-full" />
                <input type="text" placeholder="Restaurant contact number" className="w-full px-4 py-2 border rounded-full" />
                <textarea placeholder="What do you like about the Restaurant?" className="w-full px-4 py-2 border rounded-lg"></textarea>
                <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-full">Submit</button>
            </form>
        </section>
    );
};

export default FindRestaurant;
