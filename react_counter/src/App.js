import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter.js'

class App extends Component {

  constructor() {
    super()
    this. incrementCount = this. incrementCount.bind(this)
    this. decrementCount = this. decrementCount.bind(this)
  }

  state={
    count:1 
  }

  incrementCount(){
    this.setState({
     counter: this.state.counter+1
    });
}

  decrementCount(){
  this.setState({
   counter: this.state.counter-1
  });
}


  
  render() {
    return (
      <div className="App">
          <h1>Counter</h1>
          <h2 count={this.state.count}>{this.state.counter}</h2>
         
          <button onClick={this.incrementCount}  style={{background:'green'}} incrementFn={this.incrementCount}>+</button>
          
          <button onClick={this.decrementCount} style={{background:'red'}}  decrementFn={this.decrementCount}>-</button>
          {this.decrementCount}
       </div>
    );
  }
}

export default App;
