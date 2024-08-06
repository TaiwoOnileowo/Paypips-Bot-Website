import { useState, useRef, useEffect } from "react";
import { pricing } from "../data";
import Heading from "./Heading";
import { FaCheck } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
const Pricing = ({ setActive, index, setIndex }) => {
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
      id="pricing"
      className="relative bg-white pt-12 pb-24 md:pb-48 hidden md:flex flex-col justify-center items-center"
    >
      <Heading text="Pricing" color={"black"} />
      {/* <div className="blur1 absolute z-[0] w-[10%]  h-[10%] left-[46%] top-[40%] opacity-80 rounded-[50%] opacity-1 bg-white-gradient" /> */}
      <div
        className="grid grid-cols-2 items-center gap-16 mt-16"
        ref={sectionRef}
      >
        {pricing.map((price, i) => (
          <div
            key={price.id}
            className={`flex ${
              visible && "jump-in"
            } flex-col text-medium-gray p-6 hover:scale-[1.02] w-[400px] h-[500px] transition-all ease   col-span-1  cursor-default  rounded-[15px] gap-2 light-blue-gradient ${
              i === index
                ? "border-blue-accent border-2 shadow-2xl"
                : "border-none shadow-xl"
            }   
             `}
            onClick={() => {
              setIndex(i);
              setActive("pricing");
            }}
          >
            <div className="flex justify-between">
              <h1 className="">
                {price.name} {i === 1 && "(Most Popular)"}
              </h1>
              <div
                className={`w-6 h-6   rounded-full flex items-center justify-center ${
                  i === index ? "bg-blue-accent" : "bg-white"
                }`}
              >
                {i === index && <FaCheck className=" text-xs text-white " />}
              </div>
            </div>
            <h2 className="text-4xl text-blue-accent pt-2 pb-1  font-bold">
              ${price.amount}
              <span className="text-sm  text-medium-gray">/month</span>
            </h2>

            <p className="text-sm text-wrap">
              {i === 1 ? price.text2 : price.text}{" "}
            </p>
            {/* <p className="text-text-medium-gray text-sm inline-flex items-center gap-2 w-[90%] text-white bg-blue-accent p-2 rounded-full justify-center">
              {price.transaction_fee}% transaction fee <FaInfoCircle />
            </p> */}
            <div className="flex my-4 items-center gap-2">
              <div className="w-[4px] h-[4px] bg-blue-accent rounded-full" />
              <hr className="border-medium-gray opacity-50 w-[120px]" />
              <p className="text-sm ">Features</p>
              <hr className="border-medium-gray opacity-50 w-[120px]" />
              <div className="w-[4px] h-[4px] bg-blue-accent rounded-full" />
            </div>
            <div className="flex flex-col  h-[150px]  justify-between gap-4">
              <div className="flex gap-2  flex-col">
                {Object.values(price.benefits).map((benefit, index) => (
                  <p key={index} className="flex gap-2 text-sm items-center">
                    <span className="bg-blue-accent h-4 flex items-center justify-center w-4 rounded-full">
                      <FaCheck className=" text-xs text-white" />
                    </span>
                    {index === 0 ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html:
                            "Card, Bank Transfer <br> USDT, BTC, ETH - Crypto Payment options",
                        }}
                      />
                    ) : (
                      <span key={index} className="">
                        {benefit}
                      </span>
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
