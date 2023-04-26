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
    <div className="w-full h-[500px] relative">
      <Navbar />
      <div className="w-full h-full">
        <div className="bg-gradient-to-r from-cCard absolute w-full h-full"></div>
        <img
          src={`https://image.tmdb.org/t/p/original${randomPopular?.backdrop_path}`}
          alt="hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 text-white flex flex-col justify-center items-start h-full p-8 gap-5 w-2/3 px-32">
          <h1 className="text-4xl font-bold">{randomPopular?.title}</h1>
          <p>{randomPopular?.overview}</p>
          <Link to={`movies/${randomPopular?.id}`}>
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
