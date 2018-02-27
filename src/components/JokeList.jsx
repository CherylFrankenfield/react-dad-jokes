import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeJoke from './../actions';

const JokeList = ({ dispatch, jokeList }) => {
  return (
    <div>
      <em>Here's our Dad jokes:</em>
      
    </div>
  );
};

JokeList.propTypes = {
  jokeList: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    jokeList: state.jokesById
  };
};

export default connect(mapStateToProps)(JokeList);
