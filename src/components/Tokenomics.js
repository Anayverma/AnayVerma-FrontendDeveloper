"use client";
import React, { useRef } from "react";
import DoughnutChart from "./DoughNutChart";
const Tokenomics = () => {
  return (
    <div className="relative top-[100vh] w-full h-[100vh] gradient-bg-third flex-col justify-center items-center">
      <div className="text-transparent bg-clip-text w-fit font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-6xl mx-[40%]">
        Tokenomics
      </div>

      <div className="flex justify-between m-20 ml-36 w-[80%]">
        <div className="text-white font-bold text-xl space-y-4">
          <div>
            Name <span className="ml-28 mr-9">:</span> <span className="text-zinc-500 font-medium">AI GEN</span>
          </div>
          <div>
            Total Supply <span className="ml-12 mr-9">:</span> <span className="text-zinc-500 font-medium">18</span>
          </div>
          <div>
            Contract <span className="ml-20 mr-9">:</span> <span className="text-zinc-500 font-medium">Lorem Ipsum dolor sit
            a...</span>
          </div>
        </div>
        <div className="text-white font-bold text-xl space-y-4">
          <div>
            Token Name <span className="ml-36 mr-9">:</span><span className="text-zinc-500 font-medium"> {`$AIGEN`}</span>
          </div>
          <div>
            Circulating Supply <span className="ml-20 mr-9"> :</span> <span className="text-zinc-500 font-medium">1B</span>
          </div>
          <div>
            Chain <span className="ml-52 mr-9">:</span><span className="text-zinc-500 font-medium"> Ethereum</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-[80%] ml-52 gap-32">
        <DoughnutChart />
        <div>
          <a
            href="#"
            class="relative w-[25vw] my-2 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-zinc-500 whitespace-nowrap transition-all border-2 duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-transparent group"
          >
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[rgb(190,45,45)] group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                class="w-5 h-5 text-[rgb(190,45,45)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              <span className="text-white mr-32"> Partnership </span> : 5% token
            </span>
          </a>
          <a
            href="#"
            class="relative w-[25vw] my-2 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-zinc-500 whitespace-nowrap transition-all border-2 duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-transparent group"
          >
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[rgb(255,143,52)] group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                class="w-5 h-5 text-[rgb(255,143,52)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              <span className="text-white mr-40"> LP Pool</span> : 35% token
            </span>
          </a>
          <a
            href="#"
            class="relative w-[25vw] my-2 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-zinc-500 whitespace-nowrap transition-all border-2 duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-transparent group"
          >
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                class="w-5 h-5 text-[rgb(153,52,255)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              <span className="text-white mr-40"> Burned</span> : 30% token
            </span>
          </a>
          <a
            href="#"
            class="relative w-[25vw] my-2 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-zinc-500 whitespace-nowrap transition-all border-2 duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-transparent group"
          >
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[rgb(2,141,253)] group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                class="w-5 h-5 text-[rgb(2,141,253)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              <span className="text-white mr-[7.5rem]"> BNB LP Pool</span> : 30% token
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
