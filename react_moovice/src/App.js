import React from 'react';
// import './node_modules/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
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
          <Route path="/battle">
              <DiscoverBattle />
            </Route>
          <Route path="/popular/">
              <Popular />
            </Route>
            <Route path="/popular-battle/">
              <PopularBattle />
            </Route>
            <Route path="/my-list/">
              <MyList />
            </Route>
            <Route path="/">
              <Discover />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;