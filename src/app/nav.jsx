import React from 'react';
import { Nav, NavItem } from './../components/nav';

export default () => (
  <Nav>
    <NavItem to="/"><i className="fas fa-home"></i></NavItem>
    <NavItem to="/elo">Rankings</NavItem>
  </Nav>
)
