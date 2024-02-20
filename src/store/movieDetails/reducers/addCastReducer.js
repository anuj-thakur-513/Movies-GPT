const addCastReducer = (state, action) => {
  state.cast = action.payload;
};

export default addCastReducer;
