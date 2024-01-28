import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import moviesReducer from "./movies/moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;
