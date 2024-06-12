import React from "react";

const CTA = () => {
  return (
    <section
      id="cta"
      className={`cta-border mb-[35em] relative bg-light-gray flex items-center py-32 pb-52 justify-center `}
    >
      {" "}
      <div className="blur absolute z-[0] w-[60%]  h-[60%] left-[-50%] top-[-30%] rounded-[50%] opacity-40 bg-shining-gradient" />
      <svg viewBox="0 0 1440 137" className=" absolute -top-[20%] rotateX">
        <path
          d="M0 137H1440V114.609H346.775C331.995 114.609 318.039 107.799 308.943 96.1501L248.278 18.4586C239.181 6.8092 225.225 0 210.445 0H0V137Z"
          fill="#ebecf0"
        ></path>
      </svg>
      <div className="bg-dark-bg  sm:flex-row flex flex-col gap-32 px-12 p-8 rounded-[20px] ">
        <div className="flex-1 flex flex-col">
          <h2
            className={`font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full}`}
          >
            Lets try Paypips now
          </h2>
          {/* <p
            className={`font-normal text-light-gray text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
          >
           
            Start Your Free Trial Now and Transform Your Forex Telegram Community Management!
          </p> */}
          <p
            className={`font-normal text-light-gray text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
          >
            Start Your Free Trial Now and Transform Your Telegram Community
            Management!
          </p>
        </div>
        <div
          className={` sm:ml-10 ml-0  items-center justify-center flex sm:mt-0 mt-10`}
        >
          <a href="https://t.me/PayPipsBot">
            <button className="w-[150px] text-white bg-shining-gradient py-2 mt-6 shadow_yellow rounded-full px-4">
              Get Started
            </button>
          </a>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default CTA;
