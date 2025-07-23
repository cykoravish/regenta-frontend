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

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <DevelopmentProcess />
      <Industries />
      <WhyNexzem />
      <Testimonials />
      <ConatctUs />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;
