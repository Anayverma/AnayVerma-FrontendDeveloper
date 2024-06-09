import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Text3d from "@/components/Text3d";
import HowItWorksSection from "@/components/HowItWorksSection";
import Tokenomics from "@/components/Tokenomics";
import RoadMap from "@/components/RoadMap";
import Footer from "@/components/Footer";
import DoughnutChart from "@/components/DoughNutChart";
export default function Home() {
  return (
    <main className="h-[200vh] w-[100vw] overflow-x-clip  gradient-bg-welcome">
      <Navbar/>
      <HeroSection/>
      <Text3d/>
      <HowItWorksSection/>
      <Tokenomics/>
      <RoadMap/>
      <Footer />
    </main>
  );
}
