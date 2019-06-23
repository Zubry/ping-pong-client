import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Index from './pages/index';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Index} />
      </div>
    </Router>
  );
}

export default App;
