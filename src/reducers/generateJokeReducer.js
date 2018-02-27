import constants from './../constants';
const { initialState, types } = constants;

const generateJokeReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.ADD_JOKE:
    const {joke,id} = action;
    let newState = Object.assign({}, state, {
      [id]: {
        joke: joke
      }
    });
    return newState;
  default:
    return state;
  }
};
export default generateJokeReducer;
