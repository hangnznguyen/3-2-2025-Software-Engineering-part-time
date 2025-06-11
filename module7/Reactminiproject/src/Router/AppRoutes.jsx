import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import PropertiesList from "../Pages/PropertiesList";
import Contact from "../Pages/Contact";
import Feedback from "../Pages/Feedback";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<PropertiesList />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/feedback" element={<Feedback />} />
      
         </Routes>
  );
};
export default AppRoutes;