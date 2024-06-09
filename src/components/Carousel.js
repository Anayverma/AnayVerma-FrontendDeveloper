import React from "react";
import {
  imageLinkCarsouel1,
  imageLinkCarsouel2,
  imageLinkCarsouel3,
} from "../data/Links.js";

const Carousel = ({ classes, position }) => {
  const textColor = classes === "white" ? "text-white" : "text-blue-900";

  const pos = position === "1" ? "0px" : position === "2" ? "183px" : "420px";
  const images =
    position === "1"
      ? imageLinkCarsouel1
      : position === "2"
      ? imageLinkCarsouel2
      : imageLinkCarsouel3;

  const repeatedImages = [...images, ...images];
  const directionClass =
    position === "2" ? "logos-slide-opposite" : "logos-slide";
  const width = position === "1" ? "150px" : "200px";

  console.log({ pos, width, directionClass });

  return (
    <div className={`${textColor} bg-transparent`}>
      <div
        style={{
          right: pos,
          width: width,
        }}
        className={`absolute top-0 overflow-hidden h-screen bg-transparent whitespace-nowrap`}
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
