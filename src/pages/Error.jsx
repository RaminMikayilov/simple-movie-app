import React from "react";
import { Link } from "react-router-dom";

//icons
import { AiOutlineHome } from "react-icons/ai";

const Error = () => {
  return (
    <div className="text-cyan-200 h-screen w-full flex flex-col items-center justify-center relative">
      <div className="border-cRose text-center border-4 p-7 shadow-lg shadow-cRose bg-cCard">
        <h1 className="text-9xl p-8 ">404</h1>
        <Link to="/">
          <h2 className="text-4xl  p-8">Page not found</h2>
          <div className="flex justify-center items-center border-2 p-2 gap-1 cursor-pointer hover:bg-cBlue duration-300 rounded-full">
            Back
            <AiOutlineHome />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Error;
