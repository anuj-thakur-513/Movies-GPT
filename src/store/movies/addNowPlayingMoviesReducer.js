const addNowPlayingMoviesReducer = (state, action) => {
  state.nowPlayingMovies = action.payload;
};

export default addNowPlayingMoviesReducer;
