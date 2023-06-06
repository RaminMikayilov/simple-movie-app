import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiKey } from "../../utils/API/apiUrls";

export const fetchSingleMovie = createAsyncThunk(
  "fetch single movie",
  async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );
    const data = await response.json();
    return data.results;
  }
);

const initialState = {
  singleMovie: null,
  isLoading: false,
};

const singleMovieSlice = createSlice({
  name: "singleMovie",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSingleMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSingleMovie.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.singleMovie = action.payload;
    },
    [fetchSingleMovie.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default singleMovieSlice.reducer;
