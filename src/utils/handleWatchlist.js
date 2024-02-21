import {
  addWatchlistMovie,
  removeWatchlistMovie,
} from "../store/movies/moviesSlice";

export const addWatchlist = (dispatch, movieDetails) => {
  dispatch(addWatchlistMovie(dispatch, movieDetails));
};

export const removeWatchlist = (dispatch, movieId) => {
  dispatch(removeWatchlistMovie(movieId));
};

export const handleWatchlist = (
  dispatch,
  watchlist,
  setWatchlist,
  movieDetails,
) => {
  setWatchlist((watchlist) => !watchlist);
  if (watchlist) {
    removeWatchlist(dispatch, movieDetails?.id);
  } else {
    addWatchlist(dispatch, movieDetails);
  }
};
