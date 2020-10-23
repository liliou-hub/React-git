import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer';
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <HomeContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
