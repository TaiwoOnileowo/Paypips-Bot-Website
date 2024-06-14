import React from "react";
import { MdOutlineMessage } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { FaLock } from "react-icons/fa6";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { FaBitcoinSign } from "react-icons/fa6";
import paystack from "../assets/paystack.svg";
import logo from "../assets/logo.png";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";

const HeroAnimation = () => {
  return (
    <div className=" flex  items-center justify-center">
      <div className="w-[80px] ss:w-[100px] msm:w-[120px] md:w-[180px] md:h-[350px] h-[200px] xsm:h-[234px] bg-blue-accent flex flex-col items-center justify-center rounded-[20px] p-4">
        <div className="flex gap-2 pb-8">
          <div className="md:w-12 md:h-12 msm:w-8 msm:h-8 w-4 h-4 ss:h-6 ss:w-6 rounded-full bg-[#dde0ca]" />
          <div className="flex flex-col items-center justify-center gap-1 ss:gap-2">
            <div className="md:w-[90px] w-[35px] h-1 ss:h-2 msm:w-[50px] md:h-4  rounded-[20px] bg-[#dde0ca]" />
            <div className="md:w-[90px] w-[35px] h-1 ss:h-2 msm:w-[50px] md:h-4  rounded-[20px] bg-[#dde0ca]" />
          </div>
        </div>
        <MdOutlineMessage className="text-[90px]  msm:text-[125px] md:text-[160px] text-[#dde0ca]" />
        <div className="flex mt-6 justify-start w-full">
          <img
            src={avatar1}
            alt=""
            className="rounded-full  w-8 h-8  md:w-10 md:h-10 border-2 border-white"
          />
          <img
            src={avatar3}
            alt=""
            className="rounded-full  w-8 h-8 md:w-10 md:h-10 -mx-6 border-2 border-white"
          />
          <img
            src={avatar2}
            alt=""
            className="rounded-full w-8 h-8  md:w-10 md:h-10 border-2 border-white "
          />
          <img
            src={avatar1}
            alt=""
            className="rounded-full  w-8 h-8 md:w-10 md:h-10 -mx-6 border-2 border-white"
          />
        </div>
      </div>
      <hr className="w-[40px] z-[1] border-2 border-muted-text" />
      <div className="bg-primary-purple z-[10] h-[350px] xsm:h-[420px] md:h-[500px] flex flex-col items-center gap-1 xsm:gap-4 p-4 w-[85px] md:w-[120px] border-hero-animation">
        <div className="w-[60px] h-[60px] bg-white flex items-center rounded-full p-4">
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div
            className={` bg-white z-10 text-blue-accent items-center justify-center p-[12px] md:w-20 md:h-20  w-14 h-14 rounded-full`}
          >
            <BsCreditCard2BackFill className="text-[35px] md:text-[55px] " />
          </div>
          <div
            className={` bg-white z-10 text-primary-purple items-center justify-center p-[12px] md:w-20 md:h-20  w-14 h-14  rounded-full`}
          >
            <FaBitcoinSign className="text-[35px] md:text-[55px] " />
          </div>
          <div className={`bg-white z-10 text-black p-4 md:p-4 rounded-full `}>
            <img src={paystack} alt="" className="md:w-12 md:h-12  w-8 h-6" />
          </div>
        </div>
        <h3 className="text-white text-lg">$13000</h3>
      </div>
      <hr className="w-[40px] border-2 border-muted-text" />
      <div className="w-[80px] ss:w-[100px] msm:w-[120px] md:w-[180px] md:h-[350px] h-[200px] xsm:h-[234px] bg-blue-accent flex flex-col items-center justify-center rounded-[20px] p-4">
        <div className="flex gap-2 pb-8">
          <div className="md:w-12 md:h-12 msm:w-8 msm:h-8 w-4 h-4 ss:h-6 ss:w-6 rounded-full bg-[#dde0ca]" />
          <div className="flex flex-col items-center justify-center gap-1 ss:gap-2">
            <div className="md:w-[90px] w-[35px] h-1 ss:h-2 msm:w-[50px] md:h-4  rounded-[20px] bg-[#dde0ca]" />
            <div className="md:w-[90px] w-[35px] h-1 ss:h-2 msm:w-[50px] md:h-4  rounded-[20px] bg-[#dde0ca]" />
          </div>
        </div>
        < BiMessageDetail className="text-[90px]  msm:text-[120px] md:text-[160px] text-[#dde0ca]" />
        <div className="flex mt-6 justify-start w-full">
          <img
            src={avatar1}
            alt=""
            className="rounded-full  w-8 h-8  md:w-10 md:h-10 border-2 border-white"
          />
          <img
            src={avatar3}
            alt=""
            className="rounded-full  w-8 h-8 md:w-10 md:h-10 -mx-6 border-2 border-white"
          />
          <img
            src={avatar2}
            alt=""
            className="rounded-full w-8 h-8  md:w-10 md:h-10 border-2 border-white "
          />
          <img
            src={avatar1}
            alt=""
            className="rounded-full  w-8 h-8 md:w-10 md:h-10 -mx-6 border-2 border-white"
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default HeroAnimation;
