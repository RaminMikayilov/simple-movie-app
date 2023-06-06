import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import { useSelector, useDispatch } from "react-redux";
import { fetchSearchResults } from "../redux/reducers/searchResultsSlice";
import MovieCard from "../components/MovieCard";

const Search = () => {
  const { query } = useParams();

  const dispatch = useDispatch();
  const { searchResultsMovies } = useSelector((state) => state.searchResults);
  const { isLoading } = useSelector((state) => state.searchResults);

  useEffect(() => {
    dispatch(fetchSearchResults(query));
  }, [query]);

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <div className="text-white pt-20 px-6 sm:px-12 md:pt-24 md:px-20 lg:pt-28 lg:px-20">
        {/* search results */}

        {searchResultsMovies.length === 0 ? (
          <p className="font-bold text-4xl text-center text-red-300">
            No search result
          </p>
        ) : (
          <>
            <h1 className="border-l-cYellow rounded-sm border-l-4 px-3 py-3 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Search results for:
              <span className="text-cYellow font-bold"> {query}</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-5 py-8 md:py-10">
              {searchResultsMovies.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
