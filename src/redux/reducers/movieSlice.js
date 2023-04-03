import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Ramin",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default movieSlice.reducer;
