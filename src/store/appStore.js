import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import moviesReducer from "./movies/moviesSlice";
import searchReducer from "./search/searchSlice";
import movieDetailsReducer from "./movieDetails/movieDetailsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    search: searchReducer,
    movieDetails: movieDetailsReducer,
  },
});

export default appStore;
