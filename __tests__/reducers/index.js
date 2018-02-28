import generateJokeReducer from './../../src/reducers/generateJokeReducer';
import constants from './../../src/constants';

describe('generateJokeReducer', () => {
  it('Should accept and return initial state', () => {
    expect(generateJokeReducer({}, {type: null})).toEqual({});
  });

  it('Should update state on receive song', () => {
    const action = actions.receiveJoke('setup of joke','punchline of joke');
    const newObject = {
      setup: action.setup,
      punchline: action.punchline
    };
    expect(generateJokeReducer({}, action)).toEqual(newObject);
  });
});
