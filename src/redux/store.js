import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../redux/reducers/movieSlice";
import popularMoviesReducer from "./reducers/popularMoviesSlice";
import topRatedMoviesReducer from "./reducers/topRatedMoviesSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    popularMovies: popularMoviesReducer,
    topRatedMovies: topRatedMoviesReducer,
  },
});
