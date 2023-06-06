import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopRated } from "../redux/reducers/topRatedMoviesSlice";

// components
import Carousel from "./Carousel";
import MovieCard from "./MovieCard";
import CategoryLoading from "./Loading/CategoryLoading";

const TopRatedMovies = () => {
  const dispatch = useDispatch();
  const { topRatedMovies, isLoading } = useSelector((state) => state.topRatedMovies);

  useEffect(() => {
    dispatch(fetchTopRated());
  }, []);

  if(isLoading) return <CategoryLoading />

  return (
    <div className="text-white pt-12 px-6 sm:pt-16 sm:px-12 md:pt-20 md:px-20 lg:pt-24 lg:px-28">
      {/* title */}
      <h1 className="border-l-cYellow rounded-sm border-l-4 px-3 py-2 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Top Rated Movies
      </h1>
      {/* carousel */}
      <div className="py-8 md:py-10">
        <Carousel>
          {topRatedMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TopRatedMovies;
