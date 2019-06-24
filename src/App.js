import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Index from './pages/index';
import Elo from './pages/elo';
import Player from './pages/player';
import Nav from './app/nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Route exact path="/" component={Index} />
        <Route exact path="/elo" component={Elo} />
        <Route exact path="/player/:player" component={Player} />
      </div>
    </Router>
  );
}

export default App;
