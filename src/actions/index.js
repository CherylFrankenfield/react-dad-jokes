import * as types from './../constants/ActionTypes';

export const addJoke = (currentJokeId) => ({
  type: types.ADD_JOKE,
  currentJokeId
});

export function fetchJoke() {
  return function () {
    return fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log('CHECK OUT THIS SWEET API RESPONSE:', json);
    });
  };
}
