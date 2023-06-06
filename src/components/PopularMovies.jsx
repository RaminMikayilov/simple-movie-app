import React from "react";
import { useSelector } from "react-redux";
import Carousel from "./Carousel";
import MovieCard from "./MovieCard";
import CategoryLoading from "./Loading/CategoryLoading";

const PopularMovies = () => {
  const { popularMovies, isLoading } = useSelector(
    (state) => state.popularMovies
  );
  // I dont fetch popular again because of I fetched it in the Hero component

  if (isLoading) return <CategoryLoading />;

  return (
    <div className="text-white pt-12 px-6 sm:pt-16 sm:px-12 md:pt-20 md:px-20 lg:pt-24 lg:px-28">
      {/* title */}
      <h1 className="border-l-cYellow rounded-sm border-l-4 px-3 py-2 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Popular Movies
      </h1>
      {/* carousel */}
      <div className="py-8 md:py-10">
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
