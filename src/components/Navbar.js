import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="text-white w-full h-[72px] flex justify-between items-center bg-transparent absolute  backdrop-blur-lg border-b-2 border-[rgb(65,64,64)] z-[1000]">
        <div className="flex justify-center items-center gap-6  m-12">
          <Link href="/">{`A I . G E N`}</Link>
          <div>Features</div>
          <div>Roadmap</div>
          <div>Tokenomics</div>
        </div>
        <div>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-zinc-500 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Whitepaper
            </span>
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
