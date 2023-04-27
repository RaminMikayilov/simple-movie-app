import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [
    // { isFavorite: false, movie: {}}
  ],
};

const favoriteMoviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      if (state.favorites.length === 0) {
        state.favorites.push({ isFavorite: true, ...action.payload });
      } else {
        const movie = state.favorites.find(
          (movie) => movie.id === action.payload.id
        );
        if (movie) {
          movie.isFavorite = !movie.isFavorite;

          state.favorites = state.favorites.filter(
            (movie) => movie.id !== action.payload.id
          );
        } else {
          state.favorites.push({ isFavorite: true, ...action.payload });
        }
      }
    },
  },
});

export const { toggleFavorite } = favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;
