import { createSlice } from "@reduxjs/toolkit";
import addNowPlayingMoviesReducer from "./reducers/addNowPlayingMoviesReducer";
import addTrailerVideoReducer from "./reducers/addTrailerVideoReducer";
import addPopularMoviesReducer from "./reducers/addPopularMoviesReducer";
import addTopRatedMoviesReducer from "./reducers/addTopRatedMoviesReducer";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addNowPlayingMovies: addNowPlayingMoviesReducer,
    addTrailerVideo: addTrailerVideoReducer,
    addPopularMovies: addPopularMoviesReducer,
    addTopRatedMovies: addTopRatedMoviesReducer,
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
