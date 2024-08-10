import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import AddResturent from './pages/AddResturent.jsx';
import HotelOrder from './pages/HotelOrder.jsx';
import OrderOnline from './pages/OrderOnline.jsx';
import UserProfile from './pages/UserProfile.jsx';

import Delivery from './components/order_pages/Delivery.jsx';
import Dining from './components/order_pages/Dining.jsx';
import Nightlife from './components/order_pages/Nightlife.jsx';

import Followers from "./components/UserPrifileComponends/outletComponents/FollowerCard.jsx";
import BlogPosts from "./components/UserPrifileComponends/outletComponents/FollowerCard.jsx";
import RecentlyViewed from "./components/UserPrifileComponends/outletComponents/RecentView.jsx";
import Reviews from "./components/UserPrifileComponends/ReviewsSection.jsx";
import Bookmarks from "./components/UserPrifileComponends/ReviewsSection.jsx";
import OrderHistory from "./components/UserPrifileComponends/outletComponents/OrderCard.jsx";
import MyAddress from "./components/UserPrifileComponends/outletComponents/MyAddress.jsx";
import FavoriteOrders from "./components/UserPrifileComponends/outletComponents/RecentView.jsx";

import Menu from "./components/HotelOrderComponents/OutletComponents/MenuComponent.jsx";
import Photos from "./components/HotelOrderComponents/OutletComponents/PhotoComponent.jsx";
import Orderonline from "./components/HotelOrderComponents/OutletComponents/AboutThisPlace.jsx";
import Review from "./components/HotelOrderComponents/OutletComponents/ReviewCom/Review.component.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-restaurant" element={<AddResturent />} />

        <Route path="/HotelOrder" element={<HotelOrder />} >
           <Route path="order-online" element={<Orderonline />} />
         {/* <Route path="overview" element={<Overview />} />*/}
          <Route path="reviews" element={<Review />} />
          <Route path="photos" element={<Photos />} />
          <Route path="menu" element={<Menu />} />
        </Route> 

        <Route path="/UserProfile" element={<UserProfile />} > 
          <Route path="Reviews" element={<Reviews />} />
          <Route path="Followers" element={<Followers />} />
          <Route path="RecentlyViewed" element={<RecentlyViewed />} />
          <Route path="Bookmarks" element={<Bookmarks />} />
          <Route path="BlogPosts" element={<BlogPosts />} />  

          <Route path="OrderHistory" element={<OrderHistory />} />          
          <Route path="MyAddress" element={<MyAddress />} />          
          <Route path="FavoriteOrders" element={<FavoriteOrders />} /> 

          <Route path="YourBooking" element={<Followers />} />   
        </Route>
        
        <Route path="/OrderOnline" element={<OrderOnline />}>
          <Route path="delivery" element={<Delivery />} />
          <Route path="dining" element={<Dining />} />
          <Route path="nightlife" element={<Nightlife />} />
        </Route> 
      </Routes>
      
    </Router>
  );
};

export default AppRouter;
