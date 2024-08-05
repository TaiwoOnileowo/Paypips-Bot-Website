import { useState } from "react";
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
import PricingCTA from "./components/PricingCTA";

// import Test from './components/Test'
const App = () => {
  const [active, setActive] = useState();
  const [pricingIndex, setPricingIndex] = useState(1);
  console.log(active);
  return (
    <div className="bg-white relative overflow-x-hidden h-screen">
      <Header active={active} />
      <Hero />

      <About setActive={setActive} />
      <HowItWorks setActive={setActive} />

      <Features setActive={setActive} />
      <WhyChooseUs />
      <Payments />
      <Dashboard />
      <Pricing
        setActive={setActive}
        index={pricingIndex}
        setIndex={setPricingIndex}
      />
      {(active === "pricing" || active === "cta" || active === "pricing1") && (
        <PricingCTA index={pricingIndex} setActive={setActive} />
      )}

      <PricingResponsive
        setActive={setActive}
        index={pricingIndex}
        setIndex={setPricingIndex}
      />
      <FeatureStroll />

      <CTA setActive={setActive} />
      <Faqs />
      <Footer />
    </div>
  );
};

export default App;
