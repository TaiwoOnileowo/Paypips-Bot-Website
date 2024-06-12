import React, { useState, useRef, useEffect } from "react";
import { pricing } from "../data";
import Heading from "./Heading";
import { FaCheck } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
const Pricing = ({ setActive }) => {
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setActive("pricing");
        } else {
          setVisible(false);
          setActive("");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.05,
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
      id="pricing"
      className="relative bg-white pt-12 pb-24 md:pb-48 flex flex-col justify-center items-center"
    >
      <Heading text="Pricing" color={"black"} />
      <div className="blur1 absolute z-[0] w-[10%]  h-[10%] left-[46%] top-[40%] opacity-80 rounded-[50%] opacity-1 bg-white-gradient" />
      <div
        className="grid grid-cols-3 items-center gap-6 mt-16"
        ref={sectionRef}
      >
        {pricing.map((price, index) => (
          <div
            key={price.id}
            className={`flex ${
              visible && "jump-in"
            } flex-col p-4 py-6 hover:scale-[1.02] transition-all ease-out duration-300 border cursor-default shadow-2xl rounded-[15px] justify-center gap-4 light-blue-gradient ${
              index === 1
                ? "scale-[1.02] hover:scale-[1.04] h-[560px]"
                : "h-[520px]"
            }`}
          >
            <div className="flex justify-between">
              <h1 className="text-sm text-medium-gray">{price.name}</h1>
              <h1
                className={`text-sm py-2 -mt-2 px-4 text-white bg-blue-accent transition-all ease-out duration-300 rounded-full ${
                  index === 1 ? "block" : "hidden"
                } hover:scale-[1.02]`}
              >
                Most Popular
              </h1>
            </div>
            <h2 className="text-6xl text-primary-purple font-bold py-4">
              ${price.amount}
              <span className="text-sm text-medium-gray">/month</span>
            </h2>
            <p className="text-text-medium-gray text-sm inline-flex items-center gap-2 w-[80%] text-white bg-blue-accent p-2 rounded-full justify-center">{price.transaction_fee}% transaction fee <FaInfoCircle/></p>
            <div className="flex mt-4 items-center gap-2">
              <div className="w-[2px] h-[2px] bg-blue-accent rounded-full" />
              <hr className="border-blue-accent  opacity-50 w-[80px]" />
              <p className="text-sm text-medium-gray">Features</p>
              <hr className="border-medium-gray opacity-50 w-[80px]" />
              <div className="w-[2px] h-[2px] bg-blue-accent rounded-full" />
            </div>
            <div className="flex flex-col mt-4 h-[300px] justify-between gap-4">
              <div className="flex gap-2  flex-col">
                {Object.values(price.benefits).map((benefit, index) => (
                  <p key={index} className="flex gap-2 items-center">
                    <span className="bg-primary-purple h-6 flex items-center justify-center w-6 rounded-full">
                      <FaCheck className="text-white" />
                    </span>
                    <span key={index} className="text-medium-gray">
                      {benefit}
                    </span>
                  </p>
                ))}
              </div>
              <p className="text-medium-gray my-6 text-sm">{price.text}</p>
              <a href="https://t.me/PayPipsBot" className="w-full">
                <button
                  className={` rounded-full w-full hover:scale-[1.02] transition-all ease-out duration-300 text-white shadow-2xl py-2 ${
                    index === 1
                      ? "bg-primary-purple hover:bg-shining-gradient"
                      : " bg-blue-accent hover:bg-shining-gradient"
                  }`}
                >
                  {price.button}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
