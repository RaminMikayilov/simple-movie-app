import React from "react";
import Navbar from "../Navbar";

const HeroLoading = () => {
  return (
    <div className="animate-pulse">
      <div className="w-full h-[500px] relative bg-gray-700">
        <Navbar />
        <div className="flex justify-center w-1/2 h-full space-y-3 flex-col p-28">
          <div className="w-1/2 h-[60px] bg-gray-500 rounded-xl"></div>
          <div className="w-2/3 h-[80px] bg-gray-500 rounded-xl"></div>
          <div className="w-[100px] h-[50px] bg-gray-500 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroLoading;
