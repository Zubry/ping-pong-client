import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  font-family: 'Mukta', sans-serif;
  color: #2A1C1F;
  border-collapse: collapse;
`;

const TR = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #e8e8e8;
  }
`;

const TH = styled.th`
  background-color: #75434D;
  color: #f4eeef;
  padding: 0.5em 0.25rem 0.25em 0.25rem;

  &:first-child {
    border-top-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
  }
`;

const TD = styled.td`
  padding: 0.5em 0.5rem 0.25em 0.5rem;
  text-transform: capitalize;
`;

export { Table }
export { TR }
export { TH }
export { TD }
