import { createSlice } from "@reduxjs/toolkit";
import addNowPlayingMoviesReducer from "./addNowPlayingMoviesReducer";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: addNowPlayingMoviesReducer,
  },
});

export const { addNowPlayingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
