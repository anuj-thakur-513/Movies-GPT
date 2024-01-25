import { createSlice } from "@reduxjs/toolkit";
import addUserReducer from "./addUserReducer";
import removeUserReducer from "./removeUserReducer";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: addUserReducer,
    removeUser: removeUserReducer,
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
