"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Text3d from "@/components/Text3d";
import HowItWorksSection from "@/components/HowItWorksSection";
import Tokenomics from "@/components/Tokenomics";
import RoadMap from "@/components/RoadMap";
import Footer from "@/components/Footer";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <main className="h-[200vh] w-[100vw] overflow-x-clip gradient-bg-welcome">
      <Navbar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <HeroSection />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Text3d />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <HowItWorksSection />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Tokenomics />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <RoadMap />
      </motion.div>
      <Footer />
    </main>
  );
}
