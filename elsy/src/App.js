import React, { Component } from 'react';
import Person from './components/Person.js';
import HeartRate from './components/HeartRate.js';
import './css/style.css';
import './css/bootstrap.min.css';



const MIN_TEMPERATURE = -20
const MAX_TEMPERATURE = 40
const MIN_HEART = 80
const MAX_HEART = 180
const MIN_STEPS = 0
const MAX_STEPS = 50000


class App extends Component {

  constructor() {
    super()
    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
    this.onHeartChange = this.onHeartChange.bind(this)

  }

  onHeartChange(val) {
    this.setState({
    
    })
  }

  render() {
    return (
      <div className='App'>
        <Person steps={this.state.steps}></Person>
        <HeartRate /*heart={this.state.heart}*/
                   min={this.state.MIN_HEART}
                   max={this.state.MAX_HEART}
                   onChange={this.state.onHeartChange}></HeartRate>
      </div>
    );
  }
}

export default App;



