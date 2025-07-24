import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import ServicesSection from "./Components/ServiceSection";
import DevelopmentProcess from "./Components/DevelopmentProcess";
import Industries from "./Components/Industries";
import Footer from "./Components/Footer";
import WhyNexzem from "./Components/WhyNexzem";
import Testimonials from "./Components/Testinonials";
import FAQSection from "./Components/FAQSection";
import ConatctUs from "./Components/Contact";
import { Route, Routes } from "react-router-dom";
import Privacy from "./Components/privacy/Privacy";
import Home from "./Components/home/Home";
import Terms from "./Components/terms/Terms";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
};

export default App;
