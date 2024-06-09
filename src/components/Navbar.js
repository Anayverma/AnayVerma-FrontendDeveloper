"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="text-white w-full h-[72px] flex justify-between items-center bg-transparent absolute backdrop-blur-lg border-b-2 border-[rgb(65,64,64)] z-[1000] px-4 sm:px-12">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-lg font-bold">{`A I . G E N`}</Link>
        <div className="hidden sm:flex gap-6">
          <div>Features</div>
          <div>Roadmap</div>
          <div>Tokenomics</div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden sm:flex gap-4">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative text-white px-5 py-2.5 transition-all ease-in duration-75 bg-zinc-500 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Whitepaper
            </span>
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Get Started
          </button>
        </div>

        <div className="block sm:hidden">
          <button
            onClick={toggleDropdown}
            className="text-xl focus:outline-none"
          >
            ☰
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-[90vw] bg-black text-white shadow-lg rounded-lg p-4">
              <div className="px-4 py-2">Features</div>
              <div className="px-4 py-2">Roadmap</div>
              <div className="px-4 py-2">Tokenomics</div>
              <div className="px-4 py-2">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span className="relative text-white px-5 py-2.5 transition-all ease-in duration-75 bg-zinc-500 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Whitepaper
                  </span>
                </button>
              </div>
              <div className="px-4 py-2">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
