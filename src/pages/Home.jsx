import React from "react";

//components
import Hero from "../components/Hero";
import PopularMovies from "../components/PopularMovies";
import TopRatedMovies from "../components/TopRatedMovies";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularMovies />
      <TopRatedMovies />
    </>
  );
};

export default Home;
