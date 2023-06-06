import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrls } from "../../utils/API/apiUrls";

export const fetchSearchResults = createAsyncThunk("fetch search results", async (query) => {
  const response = await fetch(`${apiUrls.search}/${query}`);
  const data = await response.json();
  return data.results;
});

const initialState = {
  searchResultsMovies: [],
  isLoading: false,
};

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSearchResults.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSearchResults.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.searchResultsMovies = action.payload;
    },
    [fetchSearchResults.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default searchResultsSlice.reducer;
