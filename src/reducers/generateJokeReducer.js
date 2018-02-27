import constants from './../constants';
const { initialState, types } = constants;

const generateJokeReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.ADD_JOKE:
    return action.newJoke;
  default:
    return state;
  }
};
export default generateJokeReducer;
