import React from 'react';
import logo from './logo.svg';
import './style/home.scss';
import './App.css';
import MenuBar from './components/MenuBar';
import Home from './containers/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <MenuBar />

          <Switch>
            <Route path="/" component={Home} />
          </Switch>

      </Router>
    </div>
  );
}

export default App;
