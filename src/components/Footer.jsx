import React from "react";
import logo from "../assets/logo.png";
import { footer } from "../data";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <section
      id="footer"
      className="relative mt-[35em] shadow_footer_yellow bg-black  text-white w-full overflow-y-hidden footer-border  py-8 flex pt-24 flex-col items-center gap-24 justify-between"
    >
      <div className="blur absolute z-[0] w-[60%]  h-[60%]  top-[80%] rounded-[50%] opacity-40 bg-shining-gradient" />

      <div className="flex flex-col items-center w-full justify-center">
        <img src={logo} alt="" className="w-20 h-20" />
        <p className="pt-6 w-[300px] text-center">
          Transform your Telegram Community Management
        </p>
        {/* <p className="pt-6 w-[300px] text-center">Transform your Forex Telegram Community Management</p> */}
        <a href="https://t.me/PayPipsBot">
          <button className="w-[150px] bg-shining-gradient text-white mr-6 py-[10px] mt-8 shadow_yellow rounded-full px-4">
            Get Started
          </button>
        </a>
      </div>
      <div className="flex justify-between items-center text-white w-full px-16">
        <ul className="flex gap-6">
          {footer.map((item) => (
            <li
              key={item.id}
              className="hover:text-blue-accent z-[10] transition-all  duration-300 cursor-pointer"
            >
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-6">
          <BsInstagram className="text-2xl hover:text-blue-accent z-[10] transition-all duration-300 cursor-pointer" />
          <FaTwitter className="text-2xl hover:text-blue-accent z-[10] transition-all duration-300 cursor-pointer" />
          <FaTelegramPlane className="text-2xl hover:text-blue-accent z-[10] transition-all duration-300 cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
