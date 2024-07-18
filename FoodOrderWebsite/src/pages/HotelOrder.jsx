import react from "react";
import RestaurantProfile from "../components/HotelOrderComponents/RestaurantProfile";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";



const HotelOrder = () => {

    return (
        <>
            <RestaurantProfile/>
            <Outlet/>
            <Footer/>
        </>

    );
};

export default HotelOrder