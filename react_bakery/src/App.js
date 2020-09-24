import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pay from './components/Pay'
import Add from './components/Add'
import List from './components/List'

class App extends Component {

  render() {
    return (
      <div className="App">
            activeTab={this.state.Add}
              items={[]}
      </div>

    );
  }
}

export default App;

