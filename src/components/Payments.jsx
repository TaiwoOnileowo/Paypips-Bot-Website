import React, { useEffect, useState } from "react";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { FaCheck, FaDollarSign } from "react-icons/fa";
import { FaBitcoinSign } from "react-icons/fa6";
import paystack from "../assets/paystack.svg";
import Heading from "./Heading";
import { FaMoneyBills } from "react-icons/fa6";
const Payments = () => {
  const [count, setCount] = useState(250);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMoving, setIsMoving] = useState({
    first: false,
    second: false,
    third: false,
  });

  const [scale, setScale] = useState({
    first: false,
    second: false,
    third: false,
  });
  useEffect(() => {
    const sequence = [250, 750, 900, 1500, 3000];
    let index = 0;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setCount(sequence[index]);
      index = (index + 1) % sequence.length;
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateBalls = () => {
      setIsMoving({ first: false, second: false, third: false });
      setTimeout(
        () => setIsMoving({ first: true, second: false, third: false }),
        1000
      );
      setTimeout(
        () => setScale({ first: true, second: false, third: false }),
        1000
      );
      setTimeout(
        () => setIsMoving({ first: false, second: true, third: false }),
        2000
      );
      setTimeout(
        () => setScale({ first: false, second: true, third: false }),
        2000
      );
      setTimeout(
        () => setIsMoving({ first: false, second: false, third: true }),
        3000
      );
      setTimeout(
        () => setScale({ first: false, second: false, third: true }),
        3000
      );
    };

    const interval = setInterval(animateBalls, 6000);
    animateBalls();
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="payments-with-ease"
      className="relative bg-dark-bg flex px-24 pb-32 pt-16 flex-col items-center justify-center text-white"
    >
      <div className="blur absolute z-[0] w-[60%] h-[60%] left-[-50%] top-[-15%] rounded-[50%] opacity-40 bg-shining-gradient" />
      <Heading text="Payments With Ease" />
      <div className="flex gap-16 mt-24">
        <div className="w-[40%] flex justify-center flex-col">
          <h3 className="uppercase text-blue-accent py-2">Flexible Payments</h3>
          <h1 className="text-5xl font-bold py-4">Accept payments with ease</h1>
          <ul className="flex text-muted-text justify-center gap-4 flex-col">
            <p>With Paypips, you can accept any payments with ease:</p>
            {/* <li className="flex items-center gap-2">
              <span className="bg-primary-purple h-6 flex items-center justify-center w-6 rounded-full">
                <FaCheck />
              </span>
              Accept credit/debit cards, crypto, or even cash
            </li> */}
            <li className="flex items-center gap-2">
              <span className="bg-primary-purple h-6 flex items-center justify-center w-6 rounded-full">
                <FaCheck />
              </span>
              Accept credit/debit cards, or even cash
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-primary-purple h-6 flex items-center justify-center w-6 rounded-full">
                <FaCheck />
              </span>
              Set up access tiers
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-primary-purple h-6 flex items-center justify-center w-6 rounded-full">
                <FaCheck />
              </span>
              Add free trials
            </li>
          </ul>
          <a href="https://t.me/PayPipsBot">
            <button className="w-[150px] bg-shining-gradient py-2 mt-6 shadow_yellow rounded-full px-4">
              Get Started
            </button>
          </a>
        </div>
        <div className="relative text-white flex items-center justify-center">
          <div className="flex flex-col mx-4 items-center gap-8">
            <div
              className={`bg-white z-10 text-blue-accent p-4 rounded-full ${
                scale.first && "scale-forex-div"
              }`}
            >
              <BsCreditCard2BackFill size={60} />
            </div>
            <div
              className={`${
                scale.second && "scale-forex-div"
              } bg-white z-10 text-primary-purple items-center p-4 rounded-full`}
            >
              <FaMoneyBills size={60} />
            </div>
            <div
              className={`bg-white z-10 text-black p-6 rounded-full ${
                scale.third && "scale-forex-div"
              }`}
            >
              <img src={paystack} alt="" className="w-14 h-14" />
            </div>
          </div>
          <hr className="hr-border absolute bend1 top-[35%] left-[18%]" />
          <hr className="hr-border" />
          <hr className="hr-border absolute bend2 bottom-[35%] left-[18%]" />
          <div
            className={`ball ${
              isMoving.first && "second"
            } top-[15%] opacity-0 left-[10%]`}
          />
          <div
            className={`ball left-[35%] ${
              isMoving.second && "first"
            } top-[49%] opacity-0 left-[5%]`}
          />
          <div
            className={`ball ${
              isMoving.third && "third"
            } opacity-0 bottom-[15%] left-[10%]`}
          />
          <div
            className={`p-6 rounded-[15px] flex flex-col gap-6 z-[10] bg-white text-black ${
              isAnimating && "scale-forex-div"
            }`}
          >
            <div className="flex gap-4 items-center">
              <div className="bg-blue-accent p-4 text-white rounded-full">
                <FaDollarSign size={40} />
              </div>
              <div className="text-medium-gray">
                {/* <p className="mt-2 text-xl font-bold">Forex Gig</p> */}
                <p className="mt-2 text-xl font-bold">Business Tips</p>
                <p className="font-medium">
                  <span className={`${isAnimating ? "animating" : ""}`}>
                    {count}
                  </span>{" "}
                  subscribers
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[#dde0ca] w-[300px] h-[200px]" />
              <div className="bg-[#dde0ca] mt-4 w-[300px] h-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payments;
