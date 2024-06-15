import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { navLinks } from "../data.jsx";
import { FiMenu, FiX } from "react-icons/fi";

const Header = ({ active }) => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`come-down backdrop-filter border lato border-[rgb(204_204_204)] border-opacity-10 fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-[10px] rounded-full transition-all duration-300 w-[90%] z-[1000] max-w-[756px] ${
        scroll
          ? " text-white shadow-md shadow-black"
          : "bg-primary-gradient text-[#7a7a7a]"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <a href="https://t.me/PayPipsBot">
          <img
            src={logo}
            alt="PayPips Icon"
            className="w-10 h-10 object-contain"
          />
        </a>
        <div className="hidden md:flex gap-8 items-center">
          <ul className="flex items-center justify-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.href}`}
                  className={`hover:text-primary-purple transition duration-300 ${
                    active === link.href ? "text-blue-accent" : null
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="https://t.me/PayPipsBot">
            <button className="border border-white text-white py-2 px-4 rounded-full hover:bg-white hover:text-black transition-all ease-in-out duration-300">
              Get Started
            </button>
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-2xl   text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <FiX className="animate-burger-close" />
            ) : (
              <FiMenu className="animate-burger-open" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`fixed right-0 transition-opacity transform ${
          menuOpen ? " opacity-100" : " opacity-0"
        } md:hidden flex flex-col bg-primary-purple bg-opacity-50 p-6 rounded-[20px] items-center justify-center space-y-6`}
      >
        <ul className="flex flex-col items-center justify-center gap-6">
          {navLinks.map((link, index) => (
            <li key={index} className="text-sm xs:text-lg">
              <a
                href={`#${link.href}`}
                className={`hover:text-highlight transition duration-300 ${
                  active === link.href ? "text-blue-accent" : "text-white"
                } ${menuOpen ? "animate-fade-in" : "animate-fade-out"}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="border border-white hover:bg-blue-accent text-white py-2 px-2 text-sm xs:text-base xs:px-4 rounded-full transition-all ease-in-out duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Header;
