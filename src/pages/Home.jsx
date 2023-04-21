import React from "react";

//components
import Hero from "../components/Hero";
import PopularMovies from "../components/PopularMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import LatestMovies from "../components/LatestMovies";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularMovies />
      <TopRatedMovies />
      <LatestMovies />
      <Footer />
    </>
  );
};

export default Home;
