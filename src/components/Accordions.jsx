import React, { useState } from "react";
import Heading from "./Heading";
import { faqs } from "../data";

const Accordions = () => {
  const [index, setIndex] = useState(0);
  return (
    <section
      id="faqs"
      className="bg-dark-bg flex p-24 absolute pt-16 z-[1] top-[31%] w-[1200px] right-[5%]  shadow shadow-black rounded-[35px] justify-center items-center flex-col "
    >
      <Heading text="Frequently Asked Questions" />
      <div className="mt-24 w-full flex flex-col items-start">
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
              <h1 className="title">
                <span>{question}</span>
              </h1>
              <div className="content">
                <div className="wrapper w-[600px]">
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

export default Accordions;
