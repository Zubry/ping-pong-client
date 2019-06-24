import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  height: 36px;
  overflow-x: hidden;
  background-color: #75434D;
  border: 0;
  padding: 0 1rem;
  color: #f4eeef;
  font-family: 'Lato', sans-serif;
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
`;

export default ({ loading, success, ...props}) => (
  loading
  ? <Button {...props}><i className="fas fa-spinner fa-spin"></i></Button>
  : success
  ? <Button {...props}>{props.children}</Button>
  : <Button {...props}>{props.children}</Button>
)
