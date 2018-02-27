import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchJoke } from './../actions';

function JokeSearch( { dispatch }){
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(fetchJoke(input.value.trim()));
        input.value = '';
      }}>
        <input placeholder="Joke Title" ref={node => {
          input = node;
        }}></input>
        <button>Search</button>
      </form>
      <button onClick={dispatch(fetchJoke)}>Click for a jokeList
      </button>
    </div>


  );
}

JokeSearch.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(JokeSearch);
