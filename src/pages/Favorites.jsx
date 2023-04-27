import React from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favoriteMovies);

  return (
    <>
      <Navbar />
      <div className="text-white pt-20 px-6 sm:px-12 md:pt-24 md:px-20 lg:pt-28 lg:px-28">
        {favorites.length === 0 ? (
          <p className="font-bold text-4xl text-center">No favorite movie</p>
        ) : (
          <>
            <h1 className="border-l-cYellow rounded-sm border-l-4 px-3 py-3 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Favorite Movies
            </h1>
            <div className="flex flex-wrap justify-center gap-5 py-8 md:py-10">
              {favorites.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Favorites;
