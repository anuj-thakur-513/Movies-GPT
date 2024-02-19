import { createSlice } from "@reduxjs/toolkit";
import addNowPlayingMoviesReducer from "./reducers/addNowPlayingMoviesReducer";
import addTrailerVideoReducer from "./reducers/addTrailerVideoReducer";
import addPopularMoviesReducer from "./reducers/addPopularMoviesReducer";
import addTopRatedMoviesReducer from "./reducers/addTopRatedMoviesReducer";
import addUpcomingMoviesReducer from "./reducers/addUpcomingMoviesReducer";
import addTrendingMoviesReducer from "./reducers/addTrendingMoviesReducer";
import {
  addFavouriteMovieReducer,
  removeFavouriteMovieReducer,
} from "./reducers/favouriteMovieReducer";
import {
  addWatchlistReducer,
  removeWatchlistReducer,
} from "./reducers/watchlistReducer";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trendingMovies: null,
    favouriteMovies: [],
    watchlist: [],
  },
  reducers: {
    addNowPlayingMovies: addNowPlayingMoviesReducer,
    addTrailerVideo: addTrailerVideoReducer,
    addPopularMovies: addPopularMoviesReducer,
    addTopRatedMovies: addTopRatedMoviesReducer,
    addUpcomingMovies: addUpcomingMoviesReducer,
    addTrendingMovies: addTrendingMoviesReducer,
    addFavouriteMovie: addFavouriteMovieReducer,
    removeFavouriteMovie: removeFavouriteMovieReducer,
    addWatchlist: addWatchlistReducer,
    removeWatchlist: removeWatchlistReducer,
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrendingMovies,
  addFavouriteMovie,
  removeFavouriteMovie,
  addWatchlist,
  removeWatchlist,
} = moviesSlice.actions;

export default moviesSlice.reducer;
