import React from 'react';

const ReviewItem = ({ review }) => {
  return (
    <div className="p-4 bg-white border w-full border-gray-300 mb-4">
      <div className="flex justify-between">
        <h4 className="font-bold">{review.restaurantName}</h4>
        <p className="text-gray-600">{review.location}</p>
      </div>
      <div className="flex justify-between mt-2">
        <span className="bg-green-500 text-white px-2 py-1 rounded">{review.rating} Delivery</span>
        <span className="text-gray-600">{review.timeAgo}</span>
      </div>
      <div className="mt-4">
        <span>{review.votes} Votes for helpful, {review.comments} Comments</span>
        <div className="flex space-x-4 mt-2">
          <button className="text-blue-500">Helpful</button>
          <button className="text-blue-500">Comment</button>
          <button className="text-blue-500">Share</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
