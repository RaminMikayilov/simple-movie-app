import React from "react";
import { useRef } from "react";

// icons
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Carousel = ({ children }) => {

  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 500;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 500;
  };

  return (
    <div className="flex items-center relative">
      <span
        onClick={scrollLeft}
        className="border-4 p-2 bg-cBlue bg-opacity-50 rounded-full cursor-pointer hover:text-cYellow hover:border-cYellow duration-300 absolute left-0 z-[10] hidden md:block"
      >
        <MdChevronLeft size={40} />
      </span>
      <div className="w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-4"  ref={scrollRef}>
        {children}
      </div>
      <span
        onClick={scrollRight}
        className="bg-cBlue bg-opacity-50 border-4 p-2 rounded-full cursor-pointer hover:text-cYellow hover:border-cYellow duration-300 absolute right-0 z-[10] hidden md:block"
      >
        <MdChevronRight size={40} />
      </span>
    </div>
  );
};

export default Carousel;
