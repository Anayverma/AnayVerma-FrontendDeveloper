import React from "react";
import Carousel from "./Carousel";

const HeroSection = () => {
  return (
    <div className="absolute w-full h-[100vh] flex flex-col justify-center items-center md:items-start">
      <div className="hidden md:block w-full">
        <Carousel classes="white" position="1" />
        <Carousel classes="white" position="2" />
        <Carousel classes="white" position="3" />
      </div>
      <div className="text-center md:text-left">
        <div className="relative w-[80%]  inline-flex md:top-[15px] md:left-[175px] mt-6">
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="#"
            title="Get quote now"
            className="relative inline-flex md:w-full items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            {`🎉  New in AI.GEN : Real Time Interaction`}
          </a>
        </div>
        <div className="text-white mt-8 md:mt-16 md:ml-44">
          <div className="text-3xl md:text-5xl">
            IOTA polygon serum ipsum <br />
          </div>
          <div className="h-[20px]"></div>
          <div className="text-zinc-400 text-3xl md:text-5xl">
            WAX terraUSD gala THETA
          </div>
          <div className="h-[20px] md:h-[60px]"></div>
          <div className="text-lg md:text-xl">
            Chiliz serum TRON dash aave cardano crypto celo. Golem{" "}
          </div>
          <div className="h-[15px]"></div>
          <div className="text-lg md:text-xl">
            ankr bancor horizen ethereum quant bitcoin.
          </div>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-6 md:mt-8"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
