import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 0.5rem;
  border: 0;
  position: relative;
  font-family: 'Mukta', sans-serif;
  color: #2A1C1F;
  background-color: white;

  &:focus {
    outline: none;
  }
`

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #dccbcf;
    z-index: 10;
  }

  input:focus ~ span {
    width: 100%;
    transition: 0.2s cubic-bezier(.5, -0.5, .5, 1);
  }
`

const InputBorder = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 3px;
  background-color: #75434D;
  z-index: 20;
  transform: translate(-50%, 0);
  transition: 0.2s cubic-bezier(.5, -0.5, .5, 1);
  width: 0%;
`;

export default ({...props}) => (
  <InputWrapper>
    <Input type="text" {...props}/>
    <InputBorder />
  </InputWrapper>
)
