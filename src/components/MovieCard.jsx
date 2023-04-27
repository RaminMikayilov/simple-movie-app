import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/reducers/favoriteMoviesSlice";

//icons
import { AiFillStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const MovieCard = (movie) => {
  const { id, title, poster_path, vote_average, release_date } = movie;

  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="inline-block w-[200px] h-[470px] rounded-sm bg-cCard shadow-md shadow-cRose/20 duration-300 relative">
      {/* favorite */}
      <span
        className="absolute right-2 top-2 bg-white/60 text-cRose rounded-full p-1 z-[15] hover:bg-white/100 cursor-pointer"
        onClick={() => {
          dispatch(toggleFavorite(movie));
          setFavorite(true);
        }}
      >
        {movie.isFavorite || favorite ? (
          <AiFillHeart size={25} />
        ) : (
          <AiOutlineHeart size={25} />
        )}
      </span>

      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
        className="rounded-r-sm rounded-l-sm w-full"
      />
      {/* card body */}
      <Link to={`/movies/${id}`}>
        <div className="p-3 space-y-2 w-full cursor-pointer hover:opacity-60 duration-300">
          <p className="text-cYellow font-medium py-1">{release_date}</p>
          <h1 className="text-white font-bold text-lg w-full whitespace-normal h-[60px]">
            {title}
          </h1>
          <div className="flex items-center space-x-1">
            <AiFillStar size={23} className="text-cYellow" />
            <span className="font-bold text-lg">{vote_average}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
