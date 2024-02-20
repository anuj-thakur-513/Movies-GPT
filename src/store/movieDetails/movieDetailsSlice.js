import { createSlice } from "@reduxjs/toolkit";
import addMovieDetailsReducer from "./reducers/addMovieDetailsReducer";
import addCastReducer from "./reducers/addCastReducer";
const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieDetails: null,
    cast: null,
  },
  reducers: {
    addMovieDetails: addMovieDetailsReducer,
    addCast: addCastReducer,
  },
});

export const { addMovieDetails, addCast } = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
