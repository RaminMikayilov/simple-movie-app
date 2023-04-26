import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrls } from "../../utils/API/apiUrls";

export const fetchLatest = createAsyncThunk("fetch latest", async () => {
  const response = await fetch(apiUrls.latest);
  const data = await response.json();
  return data.results;
});

const initialState = {
  latestMovies: [],
  isLoading: false,
};

const latestMoviesSlice = createSlice({
  name: "latest",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLatest.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchLatest.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.latestMovies = action.payload;
    },
    [fetchLatest.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default latestMoviesSlice.reducer;
