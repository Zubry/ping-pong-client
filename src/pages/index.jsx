import React from 'react';
import P from './../components/p';
import Container from './../components/container';
import Heading from './../components/heading';
import RecordForm from './../app/record-form';

function Index() {
  return (
    <Container>
      <Heading>Ping-pong</Heading>
      <P>Record the results of your ping-pong game</P>
      <RecordForm/>
    </Container>
  );
}

export default Index;
