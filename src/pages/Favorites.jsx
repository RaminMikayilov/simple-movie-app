import React from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favoriteMovies);

  return (
    <>
      <Navbar />
      <div className="px-32 pt-28 text-white">
        {favorites.length === 0 ? (
          <p className="font-bold text-4xl text-center">No favorite movie</p>
        ) : (
          <>
            <h1 className="border-l-cYellow rounded-sm border-l-4 px-3 py-2 font-bold text-4xl">
              Favorite Movies
            </h1>
            <div className="flex flex-wrap justify-center gap-5 py-8">
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
