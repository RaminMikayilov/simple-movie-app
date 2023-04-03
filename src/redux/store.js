import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../redux/reducers/movieSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
