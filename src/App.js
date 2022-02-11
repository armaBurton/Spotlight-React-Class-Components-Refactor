import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';
import './App.css';

export default function App() {

  return (
    <Router>
      <div className='App'>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/'>
            <BeaniesPage />
          </Route>
          <Route exact path="/beanie-baby/:id">
            <BeanieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}