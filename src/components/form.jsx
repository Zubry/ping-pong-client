import React from 'react'
import styled from 'styled-components'

export default styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin: 2.75rem 0 1rem;
  flex-wrap: wrap;

  @media (max-width: 599px) {
    &>div {
      flex-basis: 100%;
      text-align: center;
      margin: 2em 0;
      margin-right: 0;
    }
  }

  @media (min-width: 600px) {
    &>div:not(:last-child) {
      margin-right: 2em;
    }
  }
`;
