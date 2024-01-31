import { createSlice } from "@reduxjs/toolkit";
import toggleSearchReducer from "./reducers/toggleSearchReducer";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
  },
  reducers: {
    toggleSearch: toggleSearchReducer,
  },
});

export const { toggleSearch } = searchSlice.actions;

export default searchSlice.reducer;
