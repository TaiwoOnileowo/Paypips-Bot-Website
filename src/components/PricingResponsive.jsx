import React, { useState, useRef, useEffect } from "react";
import { pricing } from "../data";
import Heading from "./Heading";
import { FaCheck } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

const PricingResponsive = ({ setActive, setIndex, index }) => {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      setIndex((prevIndex) =>
        prevIndex < pricing.length - 1 ? prevIndex + 1 : prevIndex
      );
    }

    if (touchStartX.current - touchEndX.current < -50) {
      setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    }
  };
  const sectionRef = useRef(null);
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive("pricing");
        } else {
          setActive("");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
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
      id="pricing1"
      className="relative  bg-white pt-12 pb-24 md:pb-48 flex md:hidden flex-col justify-center items-center"
    >
      <Heading text="Pricing" color={"black"} />
      <div className="blur1 absolute z-[0] w-[10%] h-[10%] left-[46%] top-[40%] opacity-80 rounded-[50%] bg-white-gradient" />
      <div
        className="flex mt-16 w-full transition-transform ease-out duration-300"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {pricing.map((price, i) => (
          <div
            key={price.id}
            className="carousel-item w-full flex justify-center items-center"
          >
            <div
              className={`p-2 flex w-[300px] min-h-[440px] py-6  text-medium-gray flex-col  xs:p-4 transition-transform ease-out duration-300 cursor-default shadow-2xl rounded-[15px] light-blue-gradient ${
                i === index
                  ? "border-blue-accent border-2 shadow-2xl"
                  : "border-none shadow-xl"
              }`}
            >
              <div className="flex justify-between">
                <h1 className="">{price.name}</h1>
                <div
                  className={`w-6 h-6   rounded-full flex items-center justify-center ${
                    i === index ? "bg-blue-accent" : "bg-white"
                  }`}
                >
                  {i === index && <FaCheck className=" text-xs text-white " />}
                </div>
              </div>
              <h2 className="text-2xl text-blue-accent font-bold py-4">
                ${price.amount}
                <span className="text-sm text-medium-gray">/month</span>
              </h2>
              <p className="text-xs  text-wrap">{price.text} </p>
              {/* <p className="text-xs xs:text-sm inline-flex items-center gap-2 w-[90%] text-white bg-blue-accent p-2 rounded-full justify-center">
                {price.transaction_fee}% transaction fee <FaInfoCircle />
              </p> */}
              <div className="flex mt-4 items-center gap-2">
                <div className="w-[3px] h-[3px] bg-blue-accent rounded-full" />
                <hr className="border-blue-accent opacity-50 w-[100px]" />
                <p className="text-xs xs:text-sm text-medium-gray">Features</p>
                <hr className="border-medium-gray opacity-50 w-[100px]" />
                <div className="w-[3px] h-[3px] bg-blue-accent rounded-full" />
              </div>
              <div className="flex flex-col mt-4 justify-between gap-0">
                <div className="flex gap-2 flex-col text-xs xs:text-base">
                  {Object.values(price.benefits).map((benefit, index) => (
                    <p
                      key={index}
                      className="flex gap-2 text-xs  items-center"
                    >
                      <span className="bg-blue-accent xs:h-4 p-1 flex items-center justify-center xs:w-4 rounded-full">
                        <FaCheck className="text-white text-xs" />
                      </span>
                      <span className="text-medium-gray">{benefit}</span>
                    </p>
                  ))}
                </div>
                {/* <p className="text-medium-gray my-6 w-[188px] text-xs xs:text-sm">
                  {price.text}
                </p> */}
                {/* <a href="https://t.me/PayPipsBot" className="xs:w-full">
                  <button
                    className={`rounded-full text-sm sm:text-base w-full hover:scale-[1.02] transition-all ease-out duration-300 text-white shadow-2xl py-2 ${
                      index === 1
                        ? "bg-blue-accent hover:bg-shining-gradient"
                        : "bg-blue-accent hover:bg-shining-gradient"
                    }`}
                  >
                    {price.button}
                  </button>
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        {pricing.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-black" : "bg-medium-gray"
            } cursor-pointer`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingResponsive;
