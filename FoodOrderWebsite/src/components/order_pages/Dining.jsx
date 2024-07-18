import React from 'react';
import Inspiration from "../OrderOnlineComponent/Inspiration.jsx";
import TopBrands from "../OrderOnlineComponent/TopBrands.jsx";
import DeliveryRestaurants from "../cards/DeliveryRestaurants.card.jsx";
import GetMyApp from "../HomeComponents/GetMyApp.jsx";

const Dinning = () => {
  return (

    <div>
      <TopBrands/>
      <Inspiration/>
      <DeliveryRestaurants/>
      <GetMyApp/>
    </div>
  );
};

export default Dinning;