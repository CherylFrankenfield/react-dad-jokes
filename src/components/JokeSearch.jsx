import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchJoke } from './../actions';

function JokeSearch(props){
  return (
    <div>
      <button onClick={() => {
        props.dispatch(fetchJoke());
      }}>Click for a Joke!</button>
      {Object.keys(props.jokes).map((i) => {
        let jokeInJokes = props.jokes[i];
        return <div key={i}>
          <h3>Dad Joke number: {jokeInJokes.id}</h3>
          <p>{jokeInJokes.setup}</p>
          <p>{jokeInJokes.punchline}</p>
          <hr />
        </div>;
      })}
    </div>


  );
}

JokeSearch.propTypes = {
  dispatch: PropTypes.func,
  jokes: PropTypes.object
};

const mapStateToProps = state => {
  return {
    jokes: state
  };
};

export default connect(mapStateToProps)(JokeSearch);



// <form onSubmit={e => {
//   e.preventDefault();
//   if (!input.value.trim()) {
//     return;
//   }
//   dispatch(fetchJoke(input.value.trim()));
//   input.value = '';
// }}>
//   <input placeholder="Joke Title" ref={node => {
//     input = node;
//   }}></input>
//   <button>Search</button>
// </form>
