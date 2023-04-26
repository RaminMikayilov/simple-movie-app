import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrls } from "../../utils/API/apiUrls";

export const fetchTopRated = createAsyncThunk("fetch topRated", async () => {
  const response = await fetch(apiUrls.topRated);
  const data = await response.json();
  return data.results;  
});

const initialState = {
  topRatedMovies: [],
  isLoading: false,
};

const topRatedMoviesSlice = createSlice({
  name: "topRated",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopRated.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTopRated.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.topRatedMovies = action.payload;
    },
    [fetchTopRated.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default topRatedMoviesSlice.reducer;
