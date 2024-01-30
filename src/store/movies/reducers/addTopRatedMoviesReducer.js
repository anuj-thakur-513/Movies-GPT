const addTopRatedMoviesReducer = (state, action) => {
  state.topRatedMovies = action.payload;
};

export default addTopRatedMoviesReducer;
