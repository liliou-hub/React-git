import React, { Component } from 'react';
import Person from './components/Person.js';

const MIN_TEMPERATURE = -20
const MAX_TEMPERATURE = 40
const MIN_HEART = 80
const MAX_HEART = 180
const MIN_STEPS = 0
const MAX_STEPS = 50000


class App extends Component {
  render() {
    return (
      <div className='app'>
      <Person name="directions_walk"/ >
        {/* <div className='fluid-container'>
          <p>Battements de coeur:{MIN_HEART}</p>
          <p>Température : {MIN_TEMPERATURE}</p>
          <p>Nombre de pas : {MIN_STEPS}</p>          
        </div> */}
      </div>
    );
  }
}

export default App;
