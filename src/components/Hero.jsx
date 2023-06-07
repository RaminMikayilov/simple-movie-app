import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { fetchPopular } from "../redux/reducers/popularMoviesSlice";
import { useSelector, useDispatch } from "react-redux";
import HeroLoading from "./Loading/HeroLoading";

//icons
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

const Hero = () => {
  const dispatch = useDispatch();
  const { popularMovies } = useSelector((state) => state.popularMovies);
  const { isLoading } = useSelector((state) => state.popularMovies);

  useEffect(() => {
    dispatch(fetchPopular());
  }, []);

  const randomPopular =
    popularMovies[Math.floor(Math.random() * popularMovies.length)];

  if (isLoading) return <HeroLoading />;

  return (
    <div className="w-full h-[600px] max-h-screen md:h-screen relative">
      <Navbar />
      <div className="w-full h-full">
        <div className="md:bg-gradient-to-r md:from-cCard bg-gradient-to-tr from-cCard absolute w-full h-full"></div>
        <img
          src={`https://image.tmdb.org/t/p/original${randomPopular?.backdrop_path}`}
          alt={randomPopular?.title || "Hero"}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 text-white flex flex-col justify-center items-start h-full xl:gap-10 lg:gap-8 lg:px-28 lg:w-3/4 xl:px-32 xl:w-2/3 md:px-20 md:gap-5 md:w-[70%] sm:px-10 sm:w-[80%] gap-4 px-8">
          <h1 className="lg:text-4xl font-bold xl:text-5xl md:text-2xl text-xl">
            {randomPopular?.title}
          </h1>
          <p className="xl:text-lg md:text-sm sm:text-[12px] text-[12px] font-normal md:font-medium">
            {randomPopular?.overview}
          </p>
          <Link to={`movie/${randomPopular?.id}`}>
            <button className="bg-cRose rounded-md py-2 px-4 flex items-center gap-2 hover:opacity-80">
              Details
              <BiLinkExternal />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
