import generateJokeReducer from './../../src/reducers/generateJokeReducer';

describe('generateJokeReducer', () => {
  it('Should accept and return initial state', () => {
    expect(generateJokeReducer({}, {type: null})).toEqual({});
  });
});
