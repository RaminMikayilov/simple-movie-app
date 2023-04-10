import React from "react";

// icons
import { BiMoviePlay } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex justify-between p-6 px-40 bg-transparent text-white absolute w-full">
      <div className="cursor-pointer font-bold flex items-center gap-2">
        <span className="bg-cRose p-2 rounded-full">
          <BiMoviePlay />
        </span>
        <span>MOVIE</span>
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <span>Favorites</span>
        <span className="bg-cRose p-2 rounded-full">
          <MdFavorite />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
