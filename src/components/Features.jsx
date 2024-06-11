import React, { useState, useRef, useEffect } from "react";
import Heading from "./Heading";
import { features } from "../data";
const Features = ({ setActive }) => {
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setActive("features");
        } else {
          setVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
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
      id="features"
      className="relative bg-dark-bg flex  px-24 pt-12 pb-24 flex-col items-center justify-center text-white"
    >
      <svg viewBox="0 0 1440 137" class="absolute -top-[12%]">
        <path
          d="M0 137H1440V114.609H346.775C331.995 114.609 318.039 107.799 308.943 96.1501L248.278 18.4586C239.181 6.8092 225.225 0 210.445 0H0V137Z"
          fill="#14181f"
          class="dark-left-path"
        ></path>
      </svg>
      <div className="blur absolute z-[0] w-[60%]  h-[60%] right-[-50%] top-[-35%] rounded-[50%] opacity-40 bg-shining-gradient" />
      <Heading text="Features" />
      <div className="flex mt-24 gap-16">
        <div className="w-[40%] flex justify-center flex-col">
          <h3 className="uppercase text-blue-accent py-2">Our Hallmarks</h3>
          <h1 className="text-5xl font-bold py-4">
            The blocks of a powerful platform
          </h1>
          <p className="text-muted-text w-[500px]">
            Paypips is here to enhance and streamline the management of your
            Telegram community. From secure payment integrations to advanced
            member management tools, we provide everything you need to
            effectively engage and grow your community.
          </p>
          <button className="w-[150px] bg-shining-gradient py-2 mt-6 shadow_yellow rounded-full px-4">
            Start for free
          </button>
        </div>
        <div
          className="w-[60%] grid grid-cols-1 md:grid-cols-2 gap-8 p-6"
          ref={sectionRef}
        >
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`shadow_purple ${
                index === 1 && visible ? "bent-div" : "shine"
              } hover:border hover:border-gray-300 rounded-[15px] p-6 bg-dark-bg flex item-center justify-center gap-6 flex-col`}
            >
              <span className="text-gold text-6xl ">{feature.icon}</span>
              <p className="text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
