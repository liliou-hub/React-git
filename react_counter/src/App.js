import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter.js'

class App extends Component {

  constructor() {
    super()
    this. incrementCount = this.incrementCount.bind(this)
    this. decrementCount = this.decrementCount.bind(this)
  }

  state={
    count:1 
  }

  incrementCount(){
    this.setState({
     counter: this.state.count+1
    });
}

  decrementCount(){
  this.setState({
   counter: this.state.count-1
  });
}
  
  render() {
    return (
      <div className="App">
          <h1>Counter</h1>
          <Counter counter={this.state.count}
                   incrementFn={this.incrementCount}
                   decrementFn={this.decrementCount}></Counter>
       </div>
    );
  }
}

export default App;
