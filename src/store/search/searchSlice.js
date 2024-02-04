import { createSlice } from "@reduxjs/toolkit";
import addTmdbSearchResultsReducer from "./reducers/addTmdbSearchResultsReducer";
import addGptSearchResultsReducer from "./reducers/addGptSearchResultsReducer";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    gptSearchResults: null,
    tmdbSearchResults: null,
  },
  reducers: {
    addGptSearchResults: addGptSearchResultsReducer,
    addTmdbSearchResults: addTmdbSearchResultsReducer,
  },
});

export const { addGptSearchResults, addTmdbSearchResults } =
  searchSlice.actions;

export default searchSlice.reducer;
