import React from "react";
import Navbar from "../Navbar";

const HeroLoading = () => {
  return (
    <div className="animate-pulse">
      <div className="w-full h-[600px] max-h-screen md:h-screen relative bg-gray-700">
        <Navbar />
        <div className="flex justify-center xl:w-3/4 w-full h-full space-y-3 md:space-y-5 lg:space-y-7 flex-col xl:p-28 lg:p-20 md:p-12 sm:p-8 p-6">
          <div className="md:w-1/2 h-[60px] w-4/5 bg-gray-500 rounded-xl"></div>
          <div className="md:w-2/3 h-[80px] sm:w-4/5 w-full bg-gray-500 rounded-xl"></div>
          <div className="w-[100px] h-[50px] bg-gray-500 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroLoading;
