import React from 'react';
import Inspiration from "../OrderOnlineComponent/Inspiration.jsx";
import TopBrands from "../OrderOnlineComponent/TopBrands.jsx";
import DeliveryRestaurants from "../cards/DeliveryRestaurants.card.jsx";

const Nightlife = () => {
  return (

    <div>
      <TopBrands/>
      <Inspiration/>
      <DeliveryRestaurants/>
    </div>
  );
};

export default Nightlife;