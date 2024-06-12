import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Heading from "./Heading";
import { FaCheck } from "react-icons/fa";
const Dashboard = () => {
  const [showSecond, setShowSecond] = useState(false);
  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShowSecond(true);
    }, 4000);
    const timeout2 = setTimeout(() => {
      setShowSecond(false);
    }, 8000);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [showSecond]);
  console.log(showSecond);
  return (
    <div className="bg-dark-bg mt-24 rounded-[30px] mx-16 flex-col items-center pb-32 px-12 justify-center pt-12 flex">
      <Heading text="Paypips Dashboard" />
      <div className="flex flex-row-reverse mt-24 gap-24 text-white items-center justify-center">
        <div className="w-[50%] flex justify-center flex-col">
          <h3 className="uppercase text-blue-accent py-2">Dashboard</h3>
          <h1 className="text-5xl font-bold py-4 leading-[1.1em]">
            Explore Paypips' powerful Dashboard
          </h1>
          <ul className="flex text-muted-text justify-center gap-4 flex-col">
            <p>With Paypips Dashboard, you can:</p>
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
              Explore your users, customers, payments, and subscriptions
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-primary-purple h-6 flex items-center justify-center w-6 rounded-full">
                <FaCheck />
              </span>
              Get valuable insights
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-primary-purple h-6 flex items-center justify-center w-6 rounded-full">
                <FaCheck />
              </span>
              Support your subscribers 1-1
            </li>
          </ul>
          <a href="https://t.me/PayPipsBot">
            <button className="w-[150px] bg-shining-gradient py-2 mt-6 shadow_yellow rounded-full px-4">
              Start for free
            </button>
          </a>
        </div>
        <div className="relative flex flex-col justify-center items-center">
          <div
            className={`fade-in  ${
              showSecond ? "hidden" : "flex"
            } justify-center items-center p-6 flex-col bg-muted-text w-[400px] gap-4 h-[250px] rounded-[15px]`}
          >
            <div>
              <h1 className="inline-flex gap-2 text-medium-gray text-2xl items-center">
                Volume From Sales{" "}
                <span className="bg-primary-purple text-white p-2 rounded-[15px]">
                  +30%
                </span>
              </h1>
            </div>
            <div className="w-full h-full flex items-end gap-4 justify-center">
              <div className="bar" style={{ "--bar-height": "20%" }} />
              <div className="bar" style={{ "--bar-height": "40%" }} />
              <div className="bar" style={{ "--bar-height": "60%" }} />
              <div className="bar" style={{ "--bar-height": "90%" }} />
            </div>
          </div>
          <div
            className={`flex text-2xl fade-in p-6 text-medium-gray flex-col  bg-muted-text w-[400px] gap-2 h-[250px] rounded-[15px] ${
              showSecond ? "flex" : "hidden"
            }`}
          >
            <h1 className="  inline-flex items-center gap-2">
              <FaUserCircle />
              Timmy Dax
            </h1>
            <div className="flex gap-4 py-2">
              <p className="bg-blue-accent p-2 px-4 rounded-full text-lg pop-up text-white">
                Customer
              </p>
              <p className="bg-primary-purple p-2 px-4 rounded-full text-lg pop-up   text-white">
                Afilliate
              </p>
            </div>
            <p>LTV: $800</p>
            <hr className="w-full border-light-gray" />
            <p>Signed Up on May 28th, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
