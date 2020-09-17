import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title></Title>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code Name="test">CA FONCTIONNNNNNNE!!!!!YOUPIIII LOOK le logo a changé de sens et va plus vite! le CSS c'est fun!</code> 
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
           <em>Learn React</em>
          </a>
        </header>
      </div>
    );
  }
}

export default App;