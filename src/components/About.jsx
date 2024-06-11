import React, { useEffect, useRef } from "react";

import Heading from "./Heading";
const About = ({ setActive }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive("about");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-dark-bg relative text-white py-24 pb-32"
    >
      <div className="blur absolute z-[0] w-[60%]  h-[60%] left-[-50%] top-[70%] rounded-[50%] opacity-40 bg-shining-gradient" />

      <div className="items-center max-w-6xl flex justify-center flex-col mx-auto px-4">
        <Heading text="Introducing Paypips" />
        <div className="background-transition flex mt-10 justify-center items-center max-w-[600px] md:max-w-[700px]  text-muted-text text-opacity-50 text-center space-y-4 bg-gradient-to-r from-[#000] to-[#000] p-4 ss:p-8  rounded-lg shadow-lg">
          {/* <p className="text-sm xs:text-base text-white ss:text-lg md:text-2xl text-scroll-reveal text-center max-w-2xl">
            PayPips is dedicated to providing top-notch management tools for
            Telegram community owners, especially those in the Forex trading
            space. Our mission is to help community leaders streamline their
            operations, enhance member engagement, and achieve their business
            goals.
          </p> */}
          <p className="text-sm xs:text-base text-white ss:text-lg md:text-2xl text-scroll-reveal text-center max-w-2xl">
            PayPips is dedicated to providing top-notch management tools for
            Telegram community owners. Our mission is to help community leaders
            streamline their operations, enhance member engagement, and achieve
            their business goals.
          </p>
        </div>
        {/* <div className="flex mt-24 flex-col md:flex-row items-center justify-around">
          <img
            src="path-to-team-image1"
            alt="Team Image 1"
            className="w-48 h-48 rounded-full mb-6 md:mb-0"
          />
          <img
            src="path-to-team-image2"
            alt="Team Image 2"
            className="w-48 h-48 rounded-full mb-6 md:mb-0"
          />
          <img
            src="path-to-team-image3"
            alt="Team Image 3"
            className="w-48 h-48 rounded-full"
          />
        </div> */}
      </div>
    </section>
  );
};

export default About;
