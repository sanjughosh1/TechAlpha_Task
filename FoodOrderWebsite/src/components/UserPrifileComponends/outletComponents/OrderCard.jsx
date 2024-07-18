import React from 'react';

const OrderCard = () => {
    const orders = [
        {
          restaurantName: 'Paradise Biryani',
          location: 'Kukatpally, Hyd',
          status: 'Delivered',
          orderNumber: 211,
          totalAmount: 105.00,
          items: ['1 x Panner Biryani', '1 x Mini Chicken Biryani (Serves - Small)'],
          orderDate: '7/18/24, 12:02:45 PM',
          image: '/images/t1.jpg',
        },
        {
          restaurantName: 'Taco Town',
          location: 'Gachibowli, Hyd',
          status: 'Delivered',
          orderNumber: 212,
          totalAmount: 200.00,
          items: ['2 x Taco', '1 x Burrito'],
          orderDate: '7/17/24, 11:45:00 AM',
          image: '/images/t2.jpg',
        },
        {
            restaurantName: 'Taco Town',
            location: 'Gachibowli, Hyd',
            status: 'Delivered',
            orderNumber: 212,
            totalAmount: 200.00,
            items: ['2 x Taco', '1 x Burrito'],
            orderDate: '7/17/24, 11:45:00 AM',
            image: '/images/t3.jpg',
          },
        // Add more orders here
      ];
    
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Recent Orders</h1>
          <div className="grid grid-cols-2 col-auto gap-2">
            {orders.map((order, index) => (
               <div key={index} className="border relative m-3 p-4 rounded-lg w-[20rem] gap-2 shadow-lg bg-gray-300">
               <div className="flex items-center justify-between">
                 <div className="flex items-center">
                   <img src={order.image} alt={order.restaurantName} className="w-12 h-12 rounded-full object-cover" />
                   <div className="ml-4">
                     <h2 className="text-lg font-bold">{order.restaurantName}</h2>
                     <p className="text-gray-600">{order.location}</p>
                   </div>
                 </div>
                 <span className="text-green-600 font-semibold">{order.status}</span>
               </div>
               <div className="mt-4">
                 <p className="text-gray-600"><strong>Order Number: </strong>{order.orderNumber}</p>
                 <p className="text-gray-600"><strong>Total Amount: </strong>₹{order.totalAmount.toFixed(2)}</p>
                 <p className="text-gray-600"><strong>Items: </strong>{order.items.join(', ')}</p>
                 <p className="text-gray-600"><strong>Ordered On: </strong>{order.orderDate}</p>
               </div>
               <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">View Details</button>
             </div>
            ))}
          </div>
        </div>
      );
    };
export default OrderCard;
