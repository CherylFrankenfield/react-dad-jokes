import * as types from './../constants/ActionTypes';

export const receiveJoke = (setup, punchline, id) => ({
  type: types.RECEIVE_JOKE,
  setup,
  punchline,
  id
});

export function fetchJoke() {
  return function(dispatch) {
    return fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      if(json) {
        const setup = json.setup;
        const punchline = json.punchline;
        const id = json.id;
        dispatch(receiveJoke(setup, punchline, id));
      } else {
        console.log('Error');
      }
    });
  };
}
