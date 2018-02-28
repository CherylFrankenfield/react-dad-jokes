import constants from './../constants';
const { types } = constants;

const generateJokeReducer = (state = {}, action) => {
  let newJokesEntry;
  let newJokesByStateSlice;
  switch (action.type) {
  case types.RECEIVE_JOKE:
    newJokesEntry = {
      setup: action.setup,
      punchline: action.punchline,
      id: action.id
    };
    newJokesByStateSlice = Object.assign({}, state, {
      [action.id]: newJokesEntry
    });
    return newJokesByStateSlice;
  default:
    return state;
  }
};
export default generateJokeReducer;
