import React from "react";
import Headers from "../components/header/Heade.jsx";
import ExploreTopCompanies from "../components/body/ExploreTopCompanies.jsx";
import FeaturedCompanies from "../components/body/FeaturedCompanies.jsx";
import JobCarousel from "../components/body/JobCarousel.jsx";
import PopularRoles from "../components/body/PopularRoles.jsx";
import SponsoredCompanies from "../components/body/SponsoredCompanies.jsx";
import NaukriAppPromotion from "../components/body/NaukriAppPromotion.jsx";
import Footer from "../components/footer/Footer.jsx";



const home = () => {
    return (
        <>
        <Headers/>
        <ExploreTopCompanies/>
        <FeaturedCompanies/>
        <JobCarousel/>
        <PopularRoles/>
        <SponsoredCompanies/>
        <NaukriAppPromotion/>
        <Footer/>
        </>
    )
}

export default home