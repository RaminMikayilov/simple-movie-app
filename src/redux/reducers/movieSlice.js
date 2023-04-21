import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default movieSlice.reducer;
