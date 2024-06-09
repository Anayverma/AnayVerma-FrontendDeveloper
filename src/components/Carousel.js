import React from "react";
import {
  imageLinkCarsouel1,
  imageLinkCarsouel2,
  imageLinkCarsouel3,
} from "../data/Links.js";

const Carousel = ({ classes, position }) => {
  const textColor = classes === "white" ? "text-white" : "text-blue-900";
  const pos =
    position === "1" ? "-200px" : position === "2" ? "70px" : "340px";
  console.log(pos);
  const images =
    position === "1"
      ? imageLinkCarsouel1
      : position === "2"
      ? imageLinkCarsouel2
      : imageLinkCarsouel3;

  const repeatedImages = [...images, ...images];
  const directionClass =
    position == "2" ? "logos-slide-opposite" : "logos-slide";
  return (
    <div className={`${textColor} bg-blue-400`}>
      <div
        className={`absolute right-[${pos}] top-0 overflow-hidden w-[350px] h-screen bg-transparent whitespace-nowrap`} 
      >
        <div className={`${directionClass}`}>
          {repeatedImages.map((image, index) => (
            <img key={index} src={image} alt={`Logo ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
