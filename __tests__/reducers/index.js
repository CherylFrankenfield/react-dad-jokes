import generateJokeReducer from './../../src/reducers/generateJokeReducer';

describe('generateJokeReducer', () => {
  let action;
  const sampleJoke = {
    joke: 'Why did the coder cross the road?',
    id: 0
  };

  it('Should accept and return initial state', () => {
    expect(generateJokeReducer({}, {type: null})).toEqual({});
  });

  it('successfully add new joke to list', () => {
    const {joke, id} = sampleJoke;
    action = {
      type: 'ADD_JOKE',
      id: id,
      joke: joke
    };
    expect(generateJokeReducer({}, action)).toEqual({
      [id]: {
        joke: joke
      }
    });
  });

});
