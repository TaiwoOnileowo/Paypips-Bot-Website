import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import WhyChooseUs from "./components/WhyChooseUs";
import CTA from "./components/CTA";
import Faqs from "./components/Faqs";
import FeatureStroll from "./components/FeatureStroll";
import Footer from "./components/Footer";
import Payments from "./components/Payments";
import Dashboard from "./components/Dashboard";
import PricingResponsive from "./components/PricingResponsive";


// import Test from './components/Test'
const App = () => {
  const [active, setActive] = useState();
  return (
    <div className="bg-white overflow-x-hidden h-screen">
      <Header active={active} />
      <Hero />
   
      <About setActive={setActive} />
      <HowItWorks setActive={setActive} />
      {/* <Test/> */}
      <Features setActive={setActive} />
      <WhyChooseUs />
      <Payments />
      <Dashboard />
      <Pricing setActive={setActive} />
      <PricingResponsive/>
      <FeatureStroll />
      <div className="relative w-full">
        <CTA />
        <Faqs />
        <Footer />
      </div>
    </div>
  );
};

export default App;
