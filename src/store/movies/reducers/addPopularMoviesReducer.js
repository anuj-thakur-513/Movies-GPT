const addPopularMoviesReducer = (state, action) => {
  state.popularMovies = action.payload;
};

export default addPopularMoviesReducer;
