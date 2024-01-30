const addUpcomingMoviesReducer = (state, action) => {
  state.upcomingMovies = action.payload;
};

export default addUpcomingMoviesReducer;
