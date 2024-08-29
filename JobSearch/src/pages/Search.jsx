import React from "react";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import JobListings from "../components/body/JobListings";

const search = () => {
    return (
        <>
        <Navbar/>
        <JobListings/>
        <Footer/>
        </>
    )
}

export default search