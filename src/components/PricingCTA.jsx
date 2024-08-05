import React from "react";
import { pricing } from "../data";
const PricingCTA = ({ index, setActive }) => {
  const screenWidth = window.innerWidth;
  const active = screenWidth < 1020 ? "pricing1" : "pricing";
  return (
    <div className="fixed w-full bottom-0 z-[100]  overflow-hidden ">
      {pricing.map((item, i) => (
        <div
          className={`bg-light-text border come-up gap-4 border-t-blue-accent items-center shadow-2xl md:gap-[250px] xsm:gap-32 h-[120px] xsm:h-[150px] py-2  justify-center ${
            index === i ? "flex" : "hidden"
          } `}
          key={i}
        >
          <div>
            <h1 className="text-xs xs:text-sm">{item.name}</h1>

            <h2 className="text-2xl msm:text-4xl text-blue-accent py-1  font-bold">
              {item.amount}
              <span className="text-sm  text-medium-gray">/month</span>
            </h2>
            <p className="text-[11px] w-[200px] md:w-[250px] text-wrap">
              {item.text}{" "}
            </p>
            <a href={`#${active}`}>
              <p
                className="text-[10px] mt-2 cursor-pointer"
                onClick={() => setActive(active)}
              >
                View features
              </p>
            </a>
          </div>
          <div>
            <a href="https://t.me/paypips_adminBot" className="w-full">
              <button
                className={`text-sm sm:text-base rounded-full w-[120px] xsm:w-[200px] bg-blue-accent hover:bg-shining-gradient  hover:scale-[1.02] transition-all ease-out duration-300 text-white shadow-2xl py-2`}
              >
                {item.button}
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCTA;
