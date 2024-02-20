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
import addRecommendedMoviesReducer from "./reducers/addRecommendedMoviesReducer";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trendingMovies: null,
    recommendedMovies: null,
    favouriteMovies: [],
    watchList: [],
  },
  reducers: {
    addNowPlayingMovies: addNowPlayingMoviesReducer,
    addTrailerVideo: addTrailerVideoReducer,
    addPopularMovies: addPopularMoviesReducer,
    addTopRatedMovies: addTopRatedMoviesReducer,
    addUpcomingMovies: addUpcomingMoviesReducer,
    addTrendingMovies: addTrendingMoviesReducer,
    addRecommendedMovies: addRecommendedMoviesReducer,
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
  addRecommendedMovies,
  addFavouriteMovie,
  removeFavouriteMovie,
  addWatchlist,
  removeWatchlist,
} = moviesSlice.actions;

export default moviesSlice.reducer;
