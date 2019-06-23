import React from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './components/text';
import Label from './components/label';
import Button from './components/button';
import Form from './components/form';
import Container from './components/container';

function App() {
  return (
    <div className="App">
      <Container>
        <Form>
          <div>
            <Label for="winner">Winner</Label>
            <div>
              <Text id="winner" name="winner"/>
            </div>
          </div>
          <div>
            <Label for="loser">Loser</Label>
            <div>
              <Text id="loser" name="loser"/>
            </div>
          </div>
          <div>
            <Button>Submit</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default App;
