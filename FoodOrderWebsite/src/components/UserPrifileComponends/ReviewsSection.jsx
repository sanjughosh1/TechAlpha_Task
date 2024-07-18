import React from 'react';
import ReviewItem from './ReviewItem';
import SuggestedFoodies from './SuggestedFoodies';

const ReviewsSection = () => {
  const reviews = [
    // Example reviews data
    {
      restaurantName: 'Paradise Biryani',
      location: 'Kukatpally, Hyd',
      rating: 5,
      timeAgo: '10 days',
      votes: 10,
      comments: 2,
    },
    {
      restaurantName: 'Paradise Biryani',
      location: 'Kukatpally, Hyd',
      rating: 5,
      timeAgo: '10 days',
      votes: 10,
      comments: 2,
    },
    {
      restaurantName: 'Paradise Biryani',
      location: 'Kukatpally, Hyd',
      rating: 5,
      timeAgo: '10 days',
      votes: 10,
      comments: 2,
    },
    {
      restaurantName: 'Paradise Biryani',
      location: 'Kukatpally, Hyd',
      rating: 5,
      timeAgo: '10 days',
      votes: 10,
      comments: 2,
    },
    {
      restaurantName: 'Paradise Biryani',
      location: 'Kukatpally, Hyd',
      rating: 5,
      timeAgo: '10 days',
      votes: 10,
      comments: 2,
    },
    // Add more review objects here
  ];

  return (
    <div className="flex flex-col items-center mx-3 my-10 w-9/12">
      {reviews.map((review,index) => (
        <ReviewItem key={index} review={review} />
      ))}
      <SuggestedFoodies />
    </div>
  );
};

export default ReviewsSection;