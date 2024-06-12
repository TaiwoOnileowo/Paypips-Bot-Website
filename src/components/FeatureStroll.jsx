import React from "react";
import Heading from "./Heading";
import FeatureStrollAnimation from "./FeatureStrollAnimation";

const FeatureStroll = () => {
  
  return (
    <div
      id="feature-stroll"
      className="relative bg-dark-bg flex  px-12 md:px-24 pt-12 pb-48 flex-col items-center justify-center text-white"
    >
      <svg viewBox="0 0 1440 137" className="hidden md:block absolute -top-[12%]">
        <path
          d="M0 137H1440V114.609H346.775C331.995 114.609 318.039 107.799 308.943 96.1501L248.278 18.4586C239.181 6.8092 225.225 0 210.445 0H0V137Z"
          fill="#14181f"
        ></path>
      </svg>
      <div className="blur absolute z-[0] w-[60%]  h-[60%] right-[-50%] top-[-35%] rounded-[50%] opacity-40 bg-shining-gradient" />
      <Heading text="Interactive Feature Walkthrough" />
      <div className="flex flex-col xsm:flex-row xsm:mt-16 items-center justify-center gap-10 md:gap-36">
        <div className="md:w-[40%] flex justify-center items-center flex-col ">
          <h3 className="uppercase text-blue-accent py-2  text-sm md:text-base hidden md:block">Feature Stroll</h3>
          <h1 className="text-4xl md:text-5xl font-bold py-4">
            Discover Paypips in Action
          </h1>
          <p className="text-muted-text w-[500px] text-sm md:text-base">
            Explore even more functionalities of Paypips. From sending invite
            links and broadcasting messages to supporting subscribers and
            analyzing user insights, experience the power of our platform
            firsthand.
          </p>
          <a href="https://t.me/PayPipsBot">
            <button className="w-[150px]  bg-shining-gradient py-2 mt-6 shadow_yellow rounded-full px-4">
              Start Exploring
            </button>
          </a>
        </div>
        <FeatureStrollAnimation/>
      </div>
    </div>
  );
};

export default FeatureStroll;
