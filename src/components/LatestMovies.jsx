import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLatest } from "../redux/reducers/latestMoviesSlice";

// components
import Carousel from "./Carousel";
import MovieCard from "./MovieCard";
import CategoryLoading from "./Loading/CategoryLoading";

const LatestMovies = () => {
  const dispatch = useDispatch();
  const { latestMovies } = useSelector((state) => state.latestMovies);
  const { isLoading } = useSelector((state) => state.latestMovies);

  useEffect(() => {
    dispatch(fetchLatest());
  }, []);

  if (isLoading) return <CategoryLoading />;

  return (
    <div className="text-white pb-8 md:pb-12 lg:pb-16 pt-12 px-6 sm:pt-16 sm:px-12 md:pt-20 md:px-20 lg:pt-24 lg:px-28">
      {/* title */}
      <h1 className="border-l-cYellow rounded-sm border-l-4 px-3 py-2 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Latest Movies
      </h1>
      {/* carousel */}
      <div className="py-8 md:py-10">
        <Carousel>
          {latestMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default LatestMovies;
