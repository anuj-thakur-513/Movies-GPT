import { createSlice } from "@reduxjs/toolkit";
import addNowPlayingMoviesReducer from "./reducers/addNowPlayingMoviesReducer";
import addTrailerVideoReducer from "./reducers/addTrailerVideoReducer";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: addNowPlayingMoviesReducer,
    addTrailerVideo: addTrailerVideoReducer,
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;
