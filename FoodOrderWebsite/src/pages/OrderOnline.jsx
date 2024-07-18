import react from "react";
import NavBar from "../components/navBar/NavBar.jsx";
import Footer from "../components/footer.jsx";
import ExploreOptions from "../components/HomeComponents/ExploreOptions.jsx";
import Header  from "../components/OrderOnlineComponent/Header.jsx";
import { Outlet } from "react-router-dom";



const OrderOnline = () => {

    return (
        <>
        <NavBar/>
        <Header/>
        <Outlet/>
        <ExploreOptions/>
        <Footer/>
        </>

    );
};

export default OrderOnline