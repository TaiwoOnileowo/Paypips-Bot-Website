import React from "react";
import stars from "../assets/stars__bg.png";
import telegram3d from "../assets/telegram3d.png";
const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-dark-bg relative gap-4 text-white pt-24 flex flex-col items-center justify-center h-[120%] text-center "
    >
      {/* <img src={stars} alt="" className="absolute top-0 right-0 -z-100 w-full" /> */}
      <div className="blur absolute z-[0] w-[35%] animate-pulse h-[22%] top-[55%]  rounded-[50%] opacity-80 bg-shining-gradient" />
      {/* <h1 className="text-4xl font-bold pop-up">
        Manage Your Telegram Forex Community with Ease
      </h1> */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[40px] uppercase font-[1000] pop-up ">
          Manage Your Telegram Community with Ease
        </h1>
        <p className="text-xl italic fade-in mt-0">
          PayPips provides powerful tools for Telegram community owners to
          streamline management and maximize engagement.
        </p>
        <a href="https://t.me/PayPipsBot">
          <button className="bg-blue-accent mt-10  text-white z-[100] cursor-pointer hover:bg-shining-gradient hover:scale-[1.02] transition-all ease-in-out duration-300 text-lg font-bold w-[200px] py-3 rounded-md">
            Get Started
          </button>
        </a>
      </div>
      <div className="w-[350px]">
        <a href="https://t.me/PayPipsBot">
          <img src={telegram3d} alt="" className="pop-up " />
        </a>
      </div>
    </section>
  );
};

export default Hero;
