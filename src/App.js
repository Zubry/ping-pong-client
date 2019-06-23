import React from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './components/text';
import Label from './components/label';

function App() {
  return (
    <div className="App">
      <Label for="winner">Winner</Label>
      <div>
        <Text id="winner" name="winner"/>
      </div>
      <Label for="loser">Loser</Label>
      <div>
        <Text id="loser" name="loser"/>
      </div>
    </div>
  );
}

export default App;
