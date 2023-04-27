import React from "react";

const CategoryLoading = () => {
  return (
    <div className="animate-pulse">
      <div className="py-8 sm:py-12 md:py-16 px-8 sm:px-12 md:px-20 lg:px-28">
        {/* title */}
        <div className="py-2">
          <div className="md:w-[400px] w-[250px] h-[70px] rounded-xl bg-gray-700"></div>
        </div>
        {/* carousel */}
        <div className="py-8 md:py-10 space-x-4 overflow-x-hidden whitespace-nowrap">
          <div className="w-[200px] h-[470px] bg-gray-600 shadow-md shadow-cRose/20 rounded-sm inline-block"></div>
          <div className="w-[200px] h-[470px] bg-gray-600 shadow-md shadow-cRose/20 rounded-sm inline-block"></div>
          <div className="w-[200px] h-[470px] bg-gray-600 shadow-md shadow-cRose/20 rounded-sm inline-block"></div>
          <div className="w-[200px] h-[470px] bg-gray-600 shadow-md shadow-cRose/20 rounded-sm inline-block"></div>
          <div className="w-[200px] h-[470px] bg-gray-600 shadow-md shadow-cRose/20 rounded-sm inline-block"></div>
          <div className="w-[200px] h-[470px] bg-gray-600 shadow-md shadow-cRose/20 rounded-sm inline-block"></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryLoading;
