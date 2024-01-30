const addTrendingMoviesReducer = (state, action) => {
  state.trendingMovies = action.payload;
};

export default addTrendingMoviesReducer;
