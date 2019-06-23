import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Index from './pages/index';
import Elo from './pages/elo';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Index} />
        <Route exact path="/elo" component={Elo} />
      </div>
    </Router>
  );
}

export default App;
