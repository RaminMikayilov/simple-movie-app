import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//components
import Navbar from "../components/Navbar";

//icons
import { AiFillStar } from "react-icons/ai";

const SingleMovie = () => {
  const { id } = useParams();
  const { popularMovies } = useSelector((state) => state.popularMovies);
  const { topRatedMovies } = useSelector((state) => state.topRatedMovies);
  const { latestMovies } = useSelector((state) => state.latestMovies);
  const data = [...popularMovies, ...topRatedMovies, ...latestMovies];

  const movie = data.find((movie) => movie.id == id);
  console.log(movie);

  return (
    <div className="text-white h-screen w-screen">
      <Navbar />
      <div className=" bg-cCard/80 absolute w-full h-full"></div>
      <img
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt={movie?.title}
        className="h-full w-full object-cover"
      />
      {/* body */}
      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center">
        <div className="md:w-2/3 w-full flex p-3">
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            alt={movie?.title}
            className="w-1/2 max-h-[500px] object-cover rounded-md shadow-lg"
          />
          <div className="px-5">
            <h1 className="text-4xl font-bold py-3">{movie?.title}</h1>
            <p className="py-3 text-cyan-200">
              <span className="font-semibold text-xl">Release date:</span>{" "}
              {movie?.release_date}
            </p>
            <p className="flex gap-2 text-xl items-center font-semibold py-4">
              Rating:
              <AiFillStar size={25} className="text-cYellow" />
              {movie?.vote_average}
            </p>
            <div>
              <h3 className="font-bold text-xl py-2">Overview</h3>
              <p className="text-cyan-200">{movie?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
