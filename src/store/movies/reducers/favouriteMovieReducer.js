import { successToast } from "../../../utils/toastMessage";

export const addFavouriteMovieReducer = (state, action) => {
  let find = state?.favouriteMovies?.findIndex(
    (movie) => movie.id === action.payload.id,
  );

  if (find >= 0) {
    successToast("Already in Favourites");
  } else {
    state.favouriteMovies.push(action.payload);
    successToast("Added in Favourites");
  }
};

export const removeFavouriteMovieReducer = (state, action) => {
  state.favouritesMovies = state.favouriteMovies.filter(
    (movie) => movie?.id !== action.payload,
  );
};
