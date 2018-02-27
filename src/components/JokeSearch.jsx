import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function JokeSearch( { dispatch }){
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch();
        input.value = '';
      }}>
        <input placeholder="Joke Title" ref={node => {
          input = node;
        }}></input>
        <button>Search</button>
      </form>
    </div>
  );
}

JokeSearch.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(JokeSearch);
