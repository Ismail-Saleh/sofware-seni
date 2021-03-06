import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Router>

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
