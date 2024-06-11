import React, { useState, useEffect, useRef } from "react";
import Heading from "./Heading";

const ChatAnimation = () => {
  const [chatAnimation, setChatAnimation] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
    step8: false,
    step9: false,
    step10: false,
    step11: false,
  });
  const timeouts = useRef([]);

  const clearTimeouts = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };

  const startAnimation = () => {
    clearTimeouts();
    setChatAnimation({
      step1: false,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      step6: false,
      step7: false,
      step8: false,
      step9: false,
      step10: false,
      step11: false,
    });
    for (let i = 1; i <= 11; i++) {
      timeouts.current.push(
        setTimeout(
          () => setChatAnimation((prev) => ({ ...prev, [`step${i}`]: true })),
         i> 7 ? i *1200 : i * 1000
        )
      );
    }
  };

  const chatBoxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(startAnimation, 1000);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (chatBoxRef.current) {
      observer.observe(chatBoxRef.current);
    }

    return () => {
      clearTimeouts();
      if (chatBoxRef.current) {
        observer.unobserve(chatBoxRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    startAnimation();
  };

 
  return (
    <div id="feature-stroll" className="relative bg-dark-bg flex  px-24 pt-12 pb-48 flex-col items-center justify-center text-white">
      <svg viewBox="0 0 1440 137" className="absolute -top-[12%]"><path d="M0 137H1440V114.609H346.775C331.995 114.609 318.039 107.799 308.943 96.1501L248.278 18.4586C239.181 6.8092 225.225 0 210.445 0H0V137Z" fill="#14181f" ></path></svg>
      <div className="blur absolute z-[0] w-[60%]  h-[60%] right-[-50%] top-[-35%] rounded-[50%] opacity-40 bg-shining-gradient" />
      <Heading text="Interactive Feature Walkthrough" />
      <div className="flex mt-16 gap-36">
        <div className="w-[40%] flex justify-center flex-col">
          <h3 className="uppercase text-gold py-2">Feature Stroll</h3>
          <h1 className="text-5xl font-bold py-4">
            Discover Paypips in Action
          </h1>
          <p className="text-light-gray w-[500px]">
            Explore the functionalities of Paypips. From managing payments and
            broadcasting messages to supporting subscribers and analyzing user
            insights, experience the power of our platform firsthand.
          </p>
          <button className="w-[150px] bg-shining-gradient py-2 mt-6 shadow_yellow rounded-full px-4">
            Start Exploring
          </button>
        </div>
        <div
          ref={chatBoxRef}
          className="h-[550px] z-[100] w-[500px] flex flex-col justify-end bg-accent-bg chat-box p-4 rounded-lg shadow-lg mt-12"
          onMouseEnter={handleMouseEnter}
        >
          <div className="start-message message-sender ">
            <span>Hey</span>
          </div>
          <div
            className={`message message-sender ${
              chatAnimation.step1 ? "show" : ""
            }`}
          >
            <span>What can my membership bot do?</span>
          </div>

          <div
            className={`message message-bot ${
              chatAnimation.step2 ? "show" : ""
            }`}
          >
            <span>It can accept payments</span>
          </div>
          <div
            className={`message message-bot ${
              chatAnimation.step3 ? "show" : ""
            }`}
          >
            <span>Send invite links.</span>
          </div>

          <div
            className={`message message-bot ${
              chatAnimation.step4 ? "show" : ""
            }`}
          >
            <span>Send broadcasts</span>
          </div>
          <div
            className={`message message-bot ${
              chatAnimation.step5 ? "show" : ""
            }`}
          >
            <span>Chat with your subscribers</span>
          </div>
          <div
            className={`message message-bot ${
              chatAnimation.step6 ? "show" : ""
            }`}
          >
            <span>Run an affiliate program</span>
          </div>
          <div
            className={`message message-sender ${
              chatAnimation.step7 ? "show" : ""
            }`}
          >
            <span>Nice!</span>
          </div>

          <div
            className={`message message-bot ${
              chatAnimation.step8 ? "show" : ""
            }`}
          >
            <span>With the Paypips dashboard, you can:</span>
          </div>
          <div
            className={`message message-bot ${
              chatAnimation.step9 ? "show" : ""
            }`}
          >
            <span>
              Explore your users, customers, payments, and subscriptions
            </span>
          </div>
          <div
            className={`message message-bot ${
              chatAnimation.step10 ? "show" : ""
            }`}
          >
            <span>Get valuable insights</span>
          </div>
          <div
            className={`message message-bot ${
              chatAnimation.step11 ? "show" : ""
            }`}
          >
            <span>Support your subscribers 1-1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAnimation;
