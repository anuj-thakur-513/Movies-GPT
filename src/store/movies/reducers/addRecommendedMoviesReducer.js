const addRecommendedMoviesReducer = (state, action) => {
  state.recommendedMovies = action.payload;
};

export default addRecommendedMoviesReducer;
