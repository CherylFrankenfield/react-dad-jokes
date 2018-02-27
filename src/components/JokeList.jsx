import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const JokeList = ({ dispatch, jokeList }) => {
  let action;
  return (
    <div>
      <em>Here's our Dad jokes:</em>
      {Object.keys(jokeList).map(jokeId => {
        let joke = jokeList[jokeId];
        return <li key = {jokeId} onClick = {() => {
          if (joke.arrayPosition > 0){
            dispatch();
          }
          dispatch(changeJoke(jokeId));
        }}>
          {joke}</li>;
      })}
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
