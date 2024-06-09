"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import TiltCard from "./TiltCard";
const Example = () => {
  return (
    <motion.div
      className="grid w-full relative h-[100vh] top-[100vh]  place-content-center px-4 py-12 text-slate-900"
      animate={{ y: ["0vh", "10vh", "0vh"] }} 
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
    >
      <TiltCard image="1"/>
    </motion.div>
  );
};

export default Example;