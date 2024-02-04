const addGptSearchResultsReducer = (state, action) => {
  state.gptSearchResults = action.payload;
};

export default addGptSearchResultsReducer;
