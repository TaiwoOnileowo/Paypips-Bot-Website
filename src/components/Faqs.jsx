import React, { useState } from "react";
import Heading from "./Heading";
import { faqs } from "../data";

const Faqs = () => {
  const [index, setIndex] = useState(0);
  return (
    <section
      id="faqs"
      className="bg-dark-bg flex p-4 xs:p-8 pb-4 pt-16 z-[1] my-12 w-full xsm:w-[800px] md:w-[1200px]  mx-auto shadow shadow-black msm:rounded-[35px] justify-center items-center flex-col "
    >
      <Heading text="Frequently Asked Questions" />
      <div className="mt-12 xsm:mt-24 flex flex-col w-full items-start">
        {faqs.map((faq) => {
          const { id, question, answer } = faq;
          return (
            <div
              key={id}
              className={`accordion cursor-pointer w-full ${index === id && "show"}`}
              id={id}
              onClick={() => {
                if (index === id) {
                  setIndex(0);
                  return;
                }
                setIndex(id);
              }}
            >
              <h1 className="title text-[0.6rem] xs:text-[1rem] xsm:text-[1.25rem]">
                <span>{question}</span>
              </h1>
              <div className="content text-[0.6rem] xs:text-[1rem] xsm:text-[1.25rem]">
                <div className="wrapper w-[90%]">
                  <p>{answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faqs;
