import React from "react";

const CategoryLoading = () => {
  return (
    <div className="animate-pulse">
      <div className="text-white py-16 px-28">
        {/* title */}
        <div className="py-2">
          <div className="w-[400px] h-[70px] rounded-xl bg-gray-700"></div>
        </div>
        {/* carousel */}
        <div className="py-10 flex gap-3 overflow-hidden">
          <div className="w-[200px] h-[470px] bg-gray-600 shadow-md shadow-cRose/20 rounded-sm"></div>
          <div className="w-[200px] h-[470px] bg-gray-600 shadow-md shadow-cRose/20 rounded-sm"></div>
          <div className="w-[200px] h-[470px] bg-gray-600 shadow-md shadow-cRose/20 rounded-sm"></div>
          <div className="w-[200px] h-[470px] bg-gray-600 shadow-md shadow-cRose/20 rounded-sm"></div>
          <div className="w-[200px] h-[470px] bg-gray-600 shadow-md shadow-cRose/20 rounded-sm"></div>
          <div className="w-[200px] h-[470px] bg-gray-600 shadow-md shadow-cRose/20 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryLoading;
