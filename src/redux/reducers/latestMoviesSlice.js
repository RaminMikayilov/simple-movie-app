import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrls } from "../../utils/API/apiUrls";

export const fetchLatest = createAsyncThunk("fetch latest", async () => {
  const response = await fetch(apiUrls.latest);
  const data = await response.json();
  return data.results;  
});

const initialState = {
  latestMovies: [],
};

const latestMoviesSlice = createSlice({
  name: "latest",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLatest.pending]: (state) => {
      console.log("pending");
    },
    [fetchLatest.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.latestMovies = action.payload;
    },
    [fetchLatest.rejected]: (state) => {
      console.log("rejected");
    },
  },
});

export default latestMoviesSlice.reducer;
