import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleMovie } from "../redux/reducers/singleMovieSlice";
import { useParams } from "react-router-dom";

//components
import Navbar from "../components/Navbar";

//icons
import { AiFillStar } from "react-icons/ai";
import { useEffect } from "react";

const SingleMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleMovie, isLoading } = useSelector((state) => state.singleMovie);

  useEffect(() => {
    dispatch(fetchSingleMovie(id));
  }, [id]);

  if(isLoading) <div className="text-white text-xl">Loading ...</div>
  return (
    <div className="text-white h-screen w-screen">
      <Navbar />
      <div className=" bg-cCard/80 absolute w-full h-full"></div>
      <img
        src={`https://image.tmdb.org/t/p/original${singleMovie?.backdrop_path}`}
        alt={singleMovie?.title}
        className="h-full w-full object-cover"
      />
      {/* body */}
      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center">
        <div className="md:w-[95%] lg:w-[80%] xl:w-[70%] w-full h-full flex flex-col md:flex-row md:p-3  items-center ">
          <img
            src={`https://image.tmdb.org/t/p/original${singleMovie?.poster_path}`}
            alt={singleMovie?.title}
            className="w-full h-1/2 md:w-1/3 lg:w-1/2 max-h-[500px] object-cover md:rounded-md rounded-b-lg shadow-lg"
          />
          <div className="px-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-3">
              {singleMovie?.title}
            </h1>
            <p className="py-3 text-cyan-200">
              <span className="font-semibold text-xl">Release date:</span>{" "}
              {singleMovie?.release_date}
            </p>
            <p className="flex gap-2 text-xl items-center font-semibold py-4">
              Rating:
              <AiFillStar size={25} className="text-cYellow" />
              {singleMovie?.vote_average}
            </p>
            <div>
              <h3 className="font-bold text-xl py-2">Overview</h3>
              <p className="text-cyan-200 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[17px]">
                {singleMovie?.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
