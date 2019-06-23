import React from 'react'
import styled from 'styled-components'

export default styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 599px) {
    &>div {
      flex-basis: 100%;
      text-align: center;
      margin: 2em 0;
    }
  }
`;
