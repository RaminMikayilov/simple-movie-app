import React from "react";
import { useSelector } from "react-redux";
import Carousel from "./Carousel";
import MovieCard from "./MovieCard";

const PopularMovies = () => {
  const { popularMovies } = useSelector((state) => state.popularMovies);
  // I dont fetch popular again because of I fetched it in the Hero component
  console.log(popularMovies);

  return (
    <div className="text-white py-16 px-28">
      {/* title */}
      <h1 className="border-l-cYellow rounded-sm border-l-4 px-3 py-2 font-bold text-4xl">
        Popular movies
      </h1>
      {/* carousel */}
      <div className="py-10">
        <Carousel>
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PopularMovies;
