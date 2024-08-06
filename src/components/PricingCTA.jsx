import React from "react";
import { pricing } from "../data";
import { useModal } from "../ui/AnimatedModal";
const PricingCTA = ({ index, setActive, active }) => {
  const screenWidth = window.innerWidth;
  const href = screenWidth < 1020 ? "pricing1" : "pricing";
  const { setOpen } = useModal();

  return (
    <div className="fixed w-full bottom-0 z-[100]  overflow-hidden ">
      {pricing.map((item, i) => (
        <div
          className={`bg-light-text border come-up gap-4 border-t-blue-accent items-center shadow-2xl md:gap-[250px] xsm:gap-32 h-[160px] md:h-[120px] xsm:px-8 py-2 px-4  justify-center ${
            index === i ? "flex" : "hidden"
          } `}
          key={i}
        >
          <div>
            <h1 className="text-[13px]">
              {item.name}
              {i === 1 && " (Most Popular due to the very low transaction fees)"}
            </h1>

            <h2 className="text-2xl msm:text-4xl text-blue-accent py-1  font-bold">
              {item.amount}
              <span className="text-sm  text-medium-gray">/month</span>
            </h2>
            {active === "cta" ? (
              <a href={`#${href}`}>
                <p
                  className="text-[10px] mt-2 cursor-pointer"
                  onClick={() => setActive(href)}
                >
                  View features
                </p>
              </a>
            ) : (
              <>
                {" "}
                {i === 0 ? (
                  <>
                    <p className="text-[11px] mb-1 w-[200px] xsm:w-full">
                      + Zero fees till $1000 in transactions, then 8% fee(i.e $8
                      for every $100 processed)
                    </p>{" "}
                    <p className="text-[11px] w-[200px] xsm:w-full">
                      Best if you’re just starting out
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-[11px] w-[200px] xsm:w-full">
                      +3% transaction fee(i.e $3 for every $100 dollar that is
                      processed)
                    </p>
                    <p className="text-[11px] w-[200px]  xsm:w-full">
                      Best if you’ve done over $1000 in transaction over a short
                      period
                    </p>
                  </>
                )}
              </>
            )}
          </div>
          <div>
            <button
              onClick={() => {
                setOpen(true);
              }}
              className={`text-sm sm:text-base rounded-full w-[120px] xsm:w-[200px] bg-blue-accent hover:bg-shining-gradient  hover:scale-[1.02] transition-all ease-out duration-300 text-white shadow-2xl py-2`}
            >
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCTA;
