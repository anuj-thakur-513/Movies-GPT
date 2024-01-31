import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import moviesReducer from "./movies/moviesSlice";
import searchReducer from "./search/searchSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    search: searchReducer,
  },
});

export default appStore;
