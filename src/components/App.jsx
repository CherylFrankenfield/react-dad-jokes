import React from 'react';
import styles from './../styles/App.css';
import JokeSearch from './JokeSearch';

function App(){
  return (
    <div className = {styles.app}>
      <div className = {styles.container}>
        <h1>For Dads Only!</h1>
        <p>Search a joke term:</p>
        <JokeSearch />
      </div>
    </div>
  );
}

export default App;
