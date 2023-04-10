import React from "react";
import Navbar from "./Navbar";
import heroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="h-[500px]">
      <Navbar />
      <div className="w-full h-full">
        <img src={heroImage} alt="hero" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Hero;
