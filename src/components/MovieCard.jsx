import React from "react";

//icons
import { AiFillStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const MovieCard = (movie) => {
  const { id, title, poster_path, vote_average, release_date } = movie;

  return (
    <Link to={`movies/${id}`}>
      <div
        className="inline-block w-[200px] h-[470px] rounded-sm bg-cCard shadow-md shadow-cRose/20 cursor-pointer hover:opacity-60 duration-300"
        onClick={() => {
          console.log(id);
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          className="rounded-r-sm rounded-l-sm w-full"
        />
        {/* card body */}
        <div className="p-3 space-y-2 w-full">
          <p className="text-cYellow font-medium py-1">{release_date}</p>
          <h1 className="text-white font-bold text-lg w-full whitespace-normal h-[60px]">
            {title}
          </h1>
          <div className="flex items-center space-x-1">
            <AiFillStar size={23} className="text-cYellow" />
            <span className="font-bold text-lg">{vote_average}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
