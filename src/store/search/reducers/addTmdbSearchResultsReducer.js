const addTmdbSearchResultsReducer = (state, action) => {
  state.tmdbSearchResults = action.payload;
};

export default addTmdbSearchResultsReducer;
