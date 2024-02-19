const addMovieDetailsReducer = (state, action) => {
  state.movieDetails = action.payload;
};

export default addMovieDetailsReducer;
