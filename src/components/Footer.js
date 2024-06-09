"use client";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import Linker from "@/components/Linker";
import { FaTwitter, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-neutral-950 p-4 md:p-8 relative top-[90vh] h-[100vh] w-full gradient-bg-fifth ">
      <div className="mx-auto w-[60%] bg-gradient-to-r from-[#d96ddb] via-[#FF44EC] to-[#af22be] text-white rounded-lg">
        <Linker
          heading="Get Started"
          imgSrc="https://i.postimg.cc/Gpk7WY8N/p1.png"
          href="#"
        />
      </div>
      <div className=" flex justify-between w-[80%] mx-[10%] items-center  text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-900 text-2xl h-[70vh]">
        <div>
          Dash dash terraUSD neo uniswap <br /> kadena helium avalanche polymath{" "}
          <br /> bancor.
        </div>
        <div>
          <div className="text-white text-xl mx-[64%] whitespace-nowrap">
            Looking for help ?{" "}
          </div>
          <div className="flex justify-center items-center gap-3 w-full">
            <input
              placeholder="Enter Your Email"
              className="bg-transparent border-4 rounded-lg border-white px-4 py-2 text-white placeholder-gray-400"
            />
            {/* <input  placeholder="Enter Your Email" className="bg-transprent border-4 rounded-lg border-white"/> */}
            <button
              type="button"
              class="text-white w-[10vw] h-[6vh] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center text-xl me-2 mb-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <footer className=" w-full bg-transparent text-white border-t-2 border-zinc-400 bg-opacity-30 backdrop-blur-lg py-4 px-8 flex justify-between items-center">
        <div className="text-lg font-bold text-white">AI.GEN</div>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="h-6 w-6 text-white hover:text-gray-700" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-6 w-6 text-white hover:text-gray-700" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="h-6 w-6 text-white hover:text-gray-700" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="h-6 w-6 text-white hover:text-gray-700" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
