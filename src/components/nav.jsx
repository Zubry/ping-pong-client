import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Nav = styled.nav`
  height: 64px;
  overflow-x: hidden;
  background-color: #75434D;
  border: 0;
  color: #f4eeef;
  font-family: 'Lato', sans-serif;
  display: flex;
  justify-content: flex-start;
`;

const NavItem = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f4eeef;
  padding: 0 1em;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #693c45;
    transition: 0.2s ease;
  }

  &:active {
    background-color: #5c353d;
    transition: 0.2s ease;
  }
`

export { Nav }
export { NavItem }
