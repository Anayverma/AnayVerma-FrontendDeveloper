import Image from "next/image";
import React from "react";
import InfiniteSlider from "./CarouselHorizontal";

const HowItWorksSection = () => {
  return (
    <div className="relative top-[100vh] h-[250vh] w-full gradient-bg-second ">
      <div className="flex justify-start items-start gap-9">
        {/* <img src="https://i.postimg.cc/k4jhT5xh/girl.png"/> */}

        <Image
          src="https://i.postimg.cc/k4jhT5xh/girl.png"
          width={800}
          height={1000}
          alt="image"
          className="rounded-r-lg"
        />

        <div className="my-[8%]">
          <div className=" text-white text-6xl h-36">How it works</div>
          {/* <div className=" text-white text-xl">Select an Avatar</div> */}
          <div className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Select an Avatar
          </div>

          <div className=" text-zinc-500 text-4xl my-[10px]">
            Create or Generate Script <br />
          </div>
          <div className=" text-zinc-500 text-4xl my-[10px]">
            Select AI Voices
          </div>
          <div className=" text-zinc-500 text-4xl my-[10px]">Publish</div>
        </div>
      </div>
      <InfiniteSlider />
      <div className="relative top-[10%] w-full">
        <div className="w-full h-[30%] flex justify-center items-center gap-12">
          <Image
            src="https://i.postimg.cc/V6W9sZGy/Screenshot-2024-06-08-at-10-55-27-PM.png"
            width={400}
            height={500}
            alt="...img"
            className="w-[28%] rounded-lg transform transition-transform duration-300 hover:scale-110"
          />
          <Image
            src="https://i.postimg.cc/fW576FSm/Screenshot-2024-06-08-at-10-55-50-PM.png"
            width={600}
            height={300}
            alt="...img"
            className="w-[40%] rounded-lg transform transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="relative top-[20%] my-[3%] w-full h-[30%] flex justify-center items-center gap-12">
          <Image
            src="https://i.postimg.cc/4y46YvqY/Screenshot-2024-06-08-at-10-56-15-PM.png"
            width={600}
            height={300}
            alt="...img"
            className="w-[40%] rounded-lg transform transition-transform duration-300 hover:scale-110"
          />
          <Image
            src="https://i.postimg.cc/J0TbZDCP/Screenshot-2024-06-08-at-10-56-38-PM.png"
            width={400}
            height={500}
            alt="...img"
            className="w-[28%] rounded-lg transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
