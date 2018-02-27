import React from 'react';
import styles from './../styles/App.css';
import JokeSearch from './JokeSearch';
import JokeDisplay from './JokeDisplay';

function App(){
    return (
        <div className = {styles.app}>
            <div className = {styles.container}>
                <h1>For Dads Only!</h1>
                <p>Search a joke term:</p>
                <JokeSearch />
                <JokeDisplay />
            </div>
        </div>
    );
}

export default App;
