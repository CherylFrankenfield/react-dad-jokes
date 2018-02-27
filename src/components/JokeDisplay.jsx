import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const JokeDisplay = ({ joke }) => {
  return (
    <div>
      <h4>{joke}</h4>
    </div>
  );
};

JokeDisplay.propTypes = {
  joke: PropTypes.string
};

export default connect()(JokeDisplay);
