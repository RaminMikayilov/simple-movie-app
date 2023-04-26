import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrls } from "../../utils/API/apiUrls";

export const fetchPopular = createAsyncThunk("fetch popular", async () => {
  const response = await fetch(apiUrls.popular);
  const data = await response.json();
  return data.results;
});

const initialState = {
  popularMovies: [],
  isLoading: false,
};

const popularMoviesSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPopular.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPopular.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.popularMovies = action.payload;
    },
    [fetchPopular.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default popularMoviesSlice.reducer;
