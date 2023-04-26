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
    <div className="text-white py-16 px-28">
      {/* title */}
      <h1 className="border-l-cYellow rounded-sm border-l-4 px-3 py-2 font-bold text-4xl">
        Latest Movies
      </h1>
      {/* carousel */}
      <div className="py-10">
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
