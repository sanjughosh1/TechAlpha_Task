import react from "react";
import RestaurantProfile from "../components/HotelOrderComponents/RestaurantProfile";
import NavBar from "../components/navBar/NavBar.jsx";
import { Outlet } from "react-router-dom";



const HotelOrder = () => {

    return (
        <>
            <NavBar/>
            <RestaurantProfile/>
            <Outlet/>
            
        </>

    );
};

export default HotelOrder