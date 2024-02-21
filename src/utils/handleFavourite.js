import {
  addFavouriteMovie,
  removeFavouriteMovie,
} from "../store/movies/moviesSlice";

export const removeFavourite = (dispatch, movieId) => {
  dispatch(removeFavouriteMovie(movieId));
};

export const addFavourite = (dispatch, movieDetails) => {
  dispatch(addFavouriteMovie(movieDetails));
};

export const handleFavourite = (
  dispatch,
  favourite,
  setFavourite,
  movieDetails,
) => {
  setFavourite((favourite) => !favourite);
  if (favourite) {
    removeFavourite(dispatch, movieDetails?.id);
  } else {
    addFavourite(dispatch, movieDetails);
  }
};
