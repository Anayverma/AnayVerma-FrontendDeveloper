import React from "react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="absolute w-full h-[100vh]">
      {/* <Carousel classes="white" position="1" />
      <Carousel classes="white" position="2" />
      <Carousel classes="white" position="3" />  */}


      <div>
        <div class="relative inline-flex   top-[158px] left-[175px]">
          <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="#"
            title="Get quote now"
            class="relative inline-flex  items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            {`🎉  New in AI.GEN : Real Time Interaction`}
          </a>
        </div>
      </div>
      <div className="text-white relative   top-[228px] left-[175px]">
        <div className=" text-5xl">
          IOTA polygon serum ipsum <br /> 
        </div>
          <div className="h-[20px] "></div>
        <div className="text-zinc-400 h-[60px] text-5xl ">
          WAX terraUSD gala THETA
        </div>
        <div className="h-[60px] text-xl "></div>
        <div className=" text-xl ">Chiliz serum TRON dash aave cardano crypto celo. Golem </div>
        <div className="text-xl h-[15px] "></div>

        <div className=" h-[80px] text-xl ">ankr bancor horizen ethereum quant bitcoin.</div>

        <button
            type="button"
            class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Get Started
          </button>
      </div>
    </div>
  );
};

export default HeroSection;
