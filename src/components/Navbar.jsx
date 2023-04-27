import React from "react";
import { Link } from "react-router-dom";

// icons
import { BiMoviePlay } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-transparent text-white absolute w-full z-[10] lg:px-28 lg:py-6 xl:py-10 xl:px-32 md:px-20 md:py-5 sm:px-12 sm:py-4 px-8 py-3">
      <Link to="/">
        <div className="cursor-pointer font-bold flex items-center gap-2 duration-150 hover:opacity-80">
          <span className="bg-cRose p-2 rounded-full">
            <BiMoviePlay size={22} />
          </span>
          <span>MOVIE</span>
        </div>
      </Link>
      <Link to="/favorites">
        <div className="flex font-bold items-center gap-2 cursor-pointer duration-150 hover:opacity-80">
          <span>Favorites</span>
          <span className="bg-cRose p-2 rounded-full">
            <MdFavorite size={22} />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
