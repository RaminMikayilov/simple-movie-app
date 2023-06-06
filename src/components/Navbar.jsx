import React from "react";
import { Link } from "react-router-dom";

// icons
import { BiMoviePlay } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";

// components
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-transparent text-white absolute w-full z-[10] lg:px-28 lg:py-6 xl:py-10 xl:px-32 md:px-20 md:py-5 sm:px-10 sm:py-4 px-5 py-3">
      <Link to="/">
        <div className="cursor-pointer font-bold flex items-center gap-2 duration-150 hover:opacity-80">
          <span className="bg-cRose p-2 rounded-full">
            <BiMoviePlay size={22} />
          </span>
          <span className="hidden md:block">MOVIE</span>
        </div>
      </Link>
      <SearchBar />
      <Link to="/favorites">
        <div className="flex font-bold items-center gap-2 cursor-pointer duration-150 hover:opacity-80">
          <span className="hidden md:block">Favorites</span>
          <span className="bg-cRose p-2 rounded-full">
            <MdFavorite size={22} />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
