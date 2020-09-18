import React, { Component } from 'react';
import Person from './components/Person.js';
import HeartRate from './components/HeartRate.js';

const MIN_TEMPERATURE = -20
const MAX_TEMPERATURE = 40
const MIN_HEART = 80
const MAX_HEART = 180
const MIN_STEPS = 0
const MAX_STEPS = 50000


class App extends Component {
  render() {
    return (
    <div>
      <Person></Person>
      <HeartRate heart={80}/>
     </div>
    );
  }
}

export default App;



