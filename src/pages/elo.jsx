import React from 'react';
import P from './../components/p';
import Container from './../components/container';
import Heading from './../components/heading';
import EloTable from './../app/elo-table';

function Elo() {
  return (
    <Container>
      <Heading>Elo table</Heading>
      <P>View your ranking.</P>
      <EloTable />
    </Container>
  );
}

export default Elo;
