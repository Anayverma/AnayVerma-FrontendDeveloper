"use client";
import React from "react";
import DoughnutChart from "./DoughNutChart";

const Tokenomics = () => {
  return (
    <div className="relative top-[100vh] w-full h-[180vh] md:h-[130vh] gradient-bg-third flex flex-col justify-center items-center">
      <div className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-auto">
        Tokenomics
      </div>

      <div className="flex flex-col md:flex-row justify-between m-10  relative left-[6%] md:left-0 md:m-12 md:gap-[-20px] w-full md:w-[80%] whitespace-nowrap">
        <div className="text-white font-bold text-lg sm:text-xl md:text-lg space-y-4">
          <div>
            Name <span className="ml-10 sm:ml-20 md:ml-28">:</span>{" "}
            <span className="text-zinc-500 font-medium">AI GEN</span>
          </div>
          <div>
            Total Supply <span className="ml-4 sm:ml-8 md:ml-12">:</span>{" "}
            <span className="text-zinc-500 font-medium">18</span>
          </div>
          <div>
            Contract <span className="ml-8 sm:ml-16 md:ml-20">:</span>{" "}
            <span className="text-zinc-500 font-medium">
              Lorem Ipsum dolor sit a...
            </span>
          </div>
        </div>
        <div className="text-white font-bold text-lg sm:text-xl  md:text-lg  space-y-4 mt-4 md:mt-0 whitespace-nowrap">
          <div>
            Token Name <span className="ml-16 sm:ml-24 md:ml-24">:</span>{" "}
            <span className="text-zinc-500 font-medium">{`$AIGEN`}</span>
          </div>
          <div>
            Circulating Supply{" "}
            <span className="ml-12 sm:ml-16 md:ml-12">:</span>{" "}
            <span className="text-zinc-500 font-medium">1B</span>
          </div>
          <div>
            Chain <span className="ml-28 sm:ml-40 md:ml-40">:</span>{" "}
            <span className="text-zinc-500 font-medium">Ethereum</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-[90%] md:w-[80%]  md:gap-16 mt-10 md:mt-0">
        <DoughnutChart />
        <div className="">
          <a
            href="#"
            className="relative w-full md:w-[25vw] my-2 inline-flex items-center justify-start py-2 sm:py-3 pl-4 pr-8 sm:pr-12 overflow-hidden font-semibold text-zinc-500 whitespace-nowrap transition-all border-2 duration-150 ease-in-out rounded hover:pl-6 sm:hover:pl-10 hover:pr-4 sm:hover:pr-6 bg-transparent group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[rgb(190,45,45)] group-hover:h-full"></span>
            <span className="absolute right-0 pr-2 sm:pr-4 duration-200 ease-out group-hover:translate-x-6 sm:group-hover:translate-x-12">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(190,45,45)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-1.5 sm:pl-2.5 -translate-x-6 sm:-translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              <span className="text-white mr-16 md: "> Partnership </span> :
              5% token
            </span>
          </a>
          <a
            href="#"
            className="relative w-full md:w-[25vw] my-2 inline-flex items-center justify-start py-2 sm:py-3 pl-4 pr-8 sm:pr-12 overflow-hidden font-semibold text-zinc-500 whitespace-nowrap transition-all border-2 duration-150 ease-in-out rounded hover:pl-6 sm:hover:pl-10 hover:pr-4 sm:hover:pr-6 bg-transparent group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[rgb(255,143,52)] group-hover:h-full"></span>
            <span className="absolute right-0 pr-2 sm:pr-4 duration-200 ease-out group-hover:translate-x-6 sm:group-hover:translate-x-12">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(255,143,52)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-1.5 sm:pl-2.5 -translate-x-6 sm:-translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              <span className="text-white mr-44 sm:mr-24"> LP Pool</span> : 35%
              token
            </span>
          </a>
          <a
            href="#"
            className="relative w-full md:w-[25vw] my-2 inline-flex items-center justify-start py-2 sm:py-3 pl-4 pr-8 sm:pr-12 overflow-hidden font-semibold text-zinc-500 whitespace-nowrap transition-all border-2 duration-150 ease-in-out rounded hover:pl-6 sm:hover:pl-10 hover:pr-4 sm:hover:pr-6 bg-transparent group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span className="absolute right-0 pr-2 sm:pr-4 duration-200 ease-out group-hover:translate-x-6 sm:group-hover:translate-x-12">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(153,52,255)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span
              className="absolute left-0 pl-1.5 sm
.5 -translate-x-6 sm:-translate-x-12 group-hover
ease-out duration-200"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              <span className="text-white mr-44 sm:mr-24"> Burned</span> : 30%
              token
            </span>
          </a>
          <a
            href="#"
            className="relative w-full md:w-[25vw] my-2 inline-flex items-center justify-start py-2 sm:py-3 pl-4 pr-8 sm:pr-12 overflow-hidden font-semibold text-zinc-500 whitespace-nowrap transition-all border-2 duration-150 ease-in-out rounded hover:pl-6 sm:hover:pl-10 hover:pr-4 sm:hover:pr-6 bg-transparent group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[rgb(2,141,253)] group-hover:h-full"></span>
            <span className="absolute right-0 pr-2 sm:pr-4 duration-200 ease-out group-hover:translate-x-6 sm:group-hover:translate-x-12">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(2,141,253)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-1.5 sm:pl-2.5 -translate-x-6 sm:-translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              <span className="text-white mr-36 sm:mr-16">
                {" "}
                BNB LP Pool
              </span>{" "}
              : 30% token
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
