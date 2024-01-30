import { createSlice } from "@reduxjs/toolkit";
import addNowPlayingMoviesReducer from "./reducers/addNowPlayingMoviesReducer";
import addTrailerVideoReducer from "./reducers/addTrailerVideoReducer";
import addPopularMoviesReducer from "./reducers/addPopularMoviesReducer";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
  },
  reducers: {
    addNowPlayingMovies: addNowPlayingMoviesReducer,
    addTrailerVideo: addTrailerVideoReducer,
    addPopularMovies: addPopularMoviesReducer,
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } =
  moviesSlice.actions;

export default moviesSlice.reducer;
