const RestaurantDetails = () => {
    return (
      <div className="mt-4">
        <h1 className="text-3xl font-bold">Krupa Mess & Tiffins</h1>
        <p className="text-gray-600">South Indian, Chinese, North Indian, Sichuan, Pizza</p>
        <p className="text-gray-600">Abids, Hyderabad</p>
        <p className="text-green-600">Open now - 10am - 11pm (Today)</p>
        <div className="flex space-x-4 mt-2">
          <div>
            <span className="text-green-600 font-bold">4.1</span>
            <span className="text-gray-600"> (601 Dining Reviews)</span>
          </div>
          <div>
            <span className="text-green-600 font-bold">3.6</span>
            <span className="text-gray-600"> (37.3k Delivery Reviews)</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default RestaurantDetails;
  