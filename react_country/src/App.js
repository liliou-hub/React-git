import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/bootstrap.min.css'

class App extends Component {

  constructor() {
    super();

    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      name: '',
      capital: '',
      flag: '',
      population:  0,
      region: ''
    }

  };


  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/name/france')
      .then(res => res.json())
      .then(json => {
        // code

      });

  }


  render() {
    return (
      <div className="App">
        <div className='App-header'>
Country Selector
        </div>
        <p>{this.state.name}</p>
        <p>{this.state.capital}</p>
        <p>{this.state.flag}</p>
        <p>{this.state.population}</p>
        <p>{this.state.region}</p>
      </div>

    );

  }

}

export default App;
