import React, { Component } from 'react';
import Person from './components/Person.js';
import HeartRate from './components/HeartRate.js';
import Temperature from './components/Temperature.js'
import Water from './components/Water.js'

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

    this.onHeartChange = this.onHeartChange.bind(this);
    this.onTemperatureChange = this.onTemperatureChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.calculateWater = this.calculateWater.bind(this)

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
  }

  onHeartChange(val) {
    this.setState({
  heart:val
    })
  }

  onTemperatureChange(val) {
    this.setState({
  temperature:val
    })
  }

  onStepsChange(val) {
    this.setState({
  steps:val
    })
  }

  calculateWater(val) {
    this.setState({
    water:((1.5*0.02)/val)  
     
  
    })
  }
  

  // temperature:for(var i=20; i<=40; i++){
  //   if (onHeartChange>20){
  //     return 1,5+0,02
  //   }
  // }

  
  render() {
    return (
      <div className='App'>
        <Water water={this.state.water}></Water>
        <Person steps={this.state.steps}
                min={MIN_STEPS}
                max={MAX_STEPS}
                onChange={this.onStepsChange}
        ></Person>
        <HeartRate heart={this.state.heart}
                   min={MIN_HEART}
                   max={MAX_HEART}
                   onChange={this.onHeartChange}></HeartRate>
       <Temperature temperature={this.state.temperature}
                   min={MIN_TEMPERATURE}
                   max={MAX_TEMPERATURE}
                   onChange={this.onTemperatureChange}></Temperature>            
      </div>
    );
  }
}

export default App;



