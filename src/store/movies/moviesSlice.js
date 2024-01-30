import { createSlice } from "@reduxjs/toolkit";
import addNowPlayingMoviesReducer from "./reducers/addNowPlayingMoviesReducer";
import addTrailerVideoReducer from "./reducers/addTrailerVideoReducer";
import addPopularMoviesReducer from "./reducers/addPopularMoviesReducer";
import addTopRatedMoviesReducer from "./reducers/addTopRatedMoviesReducer";
import addUpcomingMoviesReducer from "./reducers/addUpcomingMoviesReducer";
import addTrendingMoviesReducer from "./reducers/addTrendingMoviesReducer";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trendingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: addNowPlayingMoviesReducer,
    addTrailerVideo: addTrailerVideoReducer,
    addPopularMovies: addPopularMoviesReducer,
    addTopRatedMovies: addTopRatedMoviesReducer,
    addUpcomingMovies: addUpcomingMoviesReducer,
    addTrendingMovies: addTrendingMoviesReducer,
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrendingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
