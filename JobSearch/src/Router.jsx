import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import JobsPage from "./pages/Search.jsx";
// import CompaniesPage from "./pages/CompaniesPage";
// import ServicesPage from "./pages/ServicesPage";
// import ResourcesPage from "./pages/ResourcesPage";
import NotFound from "./components/NotFound/NotFound.jsx"


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        {/* <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/resources" element={<ResourcesPage />} /> */}
        
        {/* 404 route - this should be the last Route in the list */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
