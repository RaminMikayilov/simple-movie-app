import React from "react";
import Navbar from "./Navbar";
import heroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="h-[500px] relative">
      <Navbar />
      <div className="w-full h-full">
        <img src={heroImage} alt="hero" className="w-full h-full" />
        <div className="absolute top-0 left-0 text-white flex flex-col justify-center items-start h-full p-8 gap-5 w-2/3">
          <h1>
            John Wick 3: <br /> Parabellum
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sequi
            tempore vitae. Minima delectus, assumenda aut officia fugiat atque
            laboriosam molestiae ex fuga adipisci at optio odit et. Laborum,
            molestiae.
          </p>
          <button className="bg-cRose rounded-md py-2 px-4">Watch Trailer</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
