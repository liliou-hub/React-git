import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title titre='je test react'></Title>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Title name="CA FONCTIONNNNNNNE!!!!!YOUPIIII LOOK le logo a changé de sens et va plus vite!Vive le CSS, vive le props et vive le code!!!" />
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
