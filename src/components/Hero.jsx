import React from "react";
import stars from "../assets/stars__bg.png"

const Hero = () => {
  return (
    <section  id="hero" className="bg-dark-bg relative text-white flex flex-col items-center justify-center h-screen text-center ">
      <img src={stars} alt="" className="absolute top-0 right-0 -z-100 w-full" />
      <div className="blur absolute z-[0] w-[40%] animate-pulse h-[32%] top-[35%] rounded-[50%] opacity-80 bg-shining-gradient" />
      {/* <h1 className="text-4xl font-bold pop-up">
        Manage Your Telegram Forex Community with Ease
      </h1> */}
      <h1 className="text-[40px] uppercase font-[1000] pop-up leading-4">
        Manage Your Telegram Community with Ease
      </h1>
      <p className="text-xl italic fade-in mt-0">
        PayPips provides powerful tools for Telegram community owners to
        streamline management and maximize engagement.
      </p>
      <button className="bg-blue-accent mt-10  text-white z-[100] cursor-pointer hover:bg-shining-gradient hover:scale-[1.02] transition-all ease-in-out duration-300 text-lg font-bold w-[200px] py-3 rounded-md">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
