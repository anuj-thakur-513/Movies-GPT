import { successToast } from "../../../utils/toastMessage";

export const addWatchlistReducer = (state, action) => {
  let find = state?.watchList?.findIndex(
    (movie) => movie.id === action.payload.id,
  );

  if (find >= 0) {
    successToast("Already in Watchlist");
  } else {
    state.watchList.push(action.payload);
    successToast("Added to Watchlist");
  }
};

export const removeWatchlistReducer = (state, action) => {
  state.watchList = state.watchList.filter(
    (movie) => movie?.id !== action.payload,
  );
  successToast("Removed from Watchlist");
};
