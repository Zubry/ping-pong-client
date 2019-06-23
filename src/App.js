import React from 'react';
import logo from './logo.svg';
import './App.css';
import P from './components/p';
import Container from './components/container';
import Heading from './components/heading';
import RecordForm from './app/record-form';

function App() {
  return (
    <div className="App">
      <Container>
        <Heading>Ping-pong</Heading>
        <P>Record the results of your ping-pong game</P>
        <RecordForm/>
      </Container>
    </div>
  );
}

export default App;
