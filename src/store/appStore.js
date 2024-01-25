import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
