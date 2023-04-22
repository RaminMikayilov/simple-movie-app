import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      !state.favorites.find((movie) => movie.id === action.payload.id) &&
        state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export const { addFavorite, removeFavorite } = movieSlice.actions;

export default movieSlice.reducer;
