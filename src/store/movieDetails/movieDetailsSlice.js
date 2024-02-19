import { createSlice } from "@reduxjs/toolkit";
import addMovieDetailsReducer from "./reducers/addMovieDetailsReducer";
const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieDetails: null,
  },
  reducers: {
    addMovieDetails: addMovieDetailsReducer,
  },
});

export const { addMovieDetails } = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
