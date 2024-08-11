import React from "react";
import { pricing } from "../data";
import { useModal } from "../ui/AnimatedModal";
import Button from "./Button";
const PricingCTA = ({ index, setActive, active }) => {
  const screenWidth = window.innerWidth;

  const { setOpen } = useModal();

  return (
    <div className="fixed w-full bottom-0 z-[100]  overflow-hidden ">
      {pricing.map((item, i) => (
        <div
          className={`bg-light-text border come-up border-t-blue-accent items-center shadow-2xl md:gap-[250px] xsm:gap-32 px-4 xsm:px-8 p-4  justify-center ${
            index === i ? "flex" : "hidden"
          } `}
          key={i}
        >
          <div>
            <h1 className="text-[11px] md:text-[13px]">{item.name}</h1>

            <h2 className="text-2xl msm:text-4xl text-blue-accent py-1  font-bold">
              ${item.amount}
              <span className="text-sm  text-medium-gray">/month</span>
            </h2>
            {active === "cta" ? (
              <a href={`#pricing`}>
                <p
                  className="text-[10px] mt-2 cursor-pointer"
                  onClick={() => setActive("pricing")}
                >
                  View features
                </p>
              </a>
            ) : (
              <p className="text-[11px] md:text-sm w-[200px] xsm:w-[500px]">
                {item.ctatext}
              </p>
            )}
          </div>
          <div>
            <Button text={item.button} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCTA;
