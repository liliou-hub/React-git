import React, { Component } from 'react';
import Person from './component/Person.js';

const MIN_TEMPERATURE = -20
const MAX_TEMPERATURE = 40
const MIN_HEART = 80
const MAX_HEART = 180
const MIN_STEPS = 0
const MAX_STEPS = 50000


class App extends Component {
  render() {
    return (
      <div className='app'>Bonjour!
        <div className='fluid-container'>
          <p>Battements de coeur: 80</p>
          <p>Température : -20</p>
          <p>Nombre de pas : 0</p>          
        </div>
      </div>
    );
  }
}

export default App;
