import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrls } from "../../utils/API/apiUrls";

export const fetchPopular = createAsyncThunk("fetch popular", async () => {
  const response = await fetch(apiUrls.popular);
  const data = await response.json();
  return data.results;
});

const initialState = {
  popularMovies: [],
};

const popularMoviesSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPopular.pending]: (state) => {
      console.log("pending");
    },
    [fetchPopular.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.popularMovies = action.payload;
    },
    [fetchPopular.rejected]: (state) => {
      console.log("rejected");
    },
  },
});

export default popularMoviesSlice.reducer;
