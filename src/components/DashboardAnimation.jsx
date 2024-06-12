import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const DashboardAnimation = () => {
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
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div
        className={`fade-in  ${
          showSecond ? "hidden" : "flex"
        } justify-center items-center p-6 flex-col bg-muted-text w-[300px] md:w-[400px] gap-4 h-[250px] rounded-[15px]`}
      >
        <div>
          <h1 className="inline-flex gap-2 text-medium-gray text-xl md:text-2xl items-center">
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
        className={`flex text-xl md:text-2xl fade-in p-6 text-medium-gray flex-col  bg-muted-text w-[300px] md:w-[400px] gap-2 h-[250px] rounded-[15px] ${
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
  );
};

export default DashboardAnimation;
