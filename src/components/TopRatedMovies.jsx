import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopRated } from "../redux/reducers/topRatedMoviesSlice";

// components
import Carousel from "./Carousel";
import MovieCard from "./MovieCard";
import CategoryLoading from "./Loading/CategoryLoading";

const TopRatedMovies = () => {
  const dispatch = useDispatch();
  const { topRatedMovies } = useSelector((state) => state.topRatedMovies);
  const {isLoading} = useSelector((state) => state.topRatedMovies);

  useEffect(() => {
    dispatch(fetchTopRated());
  }, []);

  if(isLoading) return <CategoryLoading />

  return (
    <div className="text-white py-16 px-28">
      {/* title */}
      <h1 className="border-l-cYellow rounded-sm border-l-4 px-3 py-2 font-bold text-4xl">
        Top Rated Movies
      </h1>
      {/* carousel */}
      <div className="py-10">
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
