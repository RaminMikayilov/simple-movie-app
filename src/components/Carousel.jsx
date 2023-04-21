import React from "react";
// icons
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Carousel = ({ children }) => {
  return (
    <div className="flex items-center relative">
      <span className="border-4 p-2 bg-cBlue bg-opacity-50 rounded-full cursor-pointer hover:text-cYellow hover:border-cYellow duration-300 absolute left-0">
        <MdChevronLeft size={40} />
      </span>
      <div className="w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-4">
        {children}
      </div>
      <span className="bg-cBlue bg-opacity-50 border-4 p-2 rounded-full cursor-pointer hover:text-cYellow hover:border-cYellow duration-300 absolute right-0">
        <MdChevronRight size={40} />
      </span>
    </div>
  );
};

export default Carousel;
