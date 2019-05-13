import React from 'react';
import styled from 'styled-components';

const Cell = () => {
  return <StyledCell>C</StyledCell>;
};

const StyledCell = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
`;

export default Cell;
