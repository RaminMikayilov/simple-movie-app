import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrls } from "../../utils/API/apiUrls";

export const fetchTopRated = createAsyncThunk("fetch topRated", async () => {
  const response = await fetch(apiUrls.topRated);
  const data = await response.json();
  return data.results;  
});

const initialState = {
  topRatedMovies: [],
};

const topRatedMoviesSlice = createSlice({
  name: "topRated",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopRated.pending]: (state) => {
      console.log("pending");
    },
    [fetchTopRated.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.topRatedMovies = action.payload;
    },
    [fetchTopRated.rejected]: (state) => {
      console.log("rejected");
    },
  },
});

export default topRatedMoviesSlice.reducer;
