import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Discover from './components/Discover';
import DiscoverBattle from './components/DiscoverBattle';
import Popular from './components/Popular';
import PopularBattle from './components/PopularBattle';
import MyList from './components/MyList';

class App extends React.Component {





  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">This Week</Link></li>
              <li><Link to="/battle">This week battle</Link></li>
              <li><Link to="/popular/">Popular</Link></li>
              <li><Link to="/popular-battle/">Popular Battle</Link></li>
              <li><Link to="/my-list/">My List</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Discover}></Route>
            <Route exact path="/battle" component={DiscoverBattle}></Route>
            <Route exact path="/popular/" component={Popular}></Route>
            <Route exact path="/popular-battle/" component={PopularBattle}></Route>
            <Route exact path="/my-list/" component={MyList}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;