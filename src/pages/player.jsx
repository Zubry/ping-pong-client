import React from 'react';
import P from './../components/p';
import Container from './../components/container';
import Heading from './../components/heading';
import Schedule from './../app/schedule';

function Player({ match }) {
  return (
    <Container>
      <Heading>{match.params.player}</Heading>
      <P>{match.params.player}'s schedule</P>
      <Schedule player={match.params.player} />
    </Container>
  );
}

export default Player;
