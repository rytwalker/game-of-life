import React from 'react';
import styled from 'styled-components';
import Cells from './Cells';

const Grid = () => {
  return (
    <StyledGrid>
      <Cells />
    </StyledGrid>
  );
};

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-columns: repeat(15, 1fr);
  width: 100%;
  height: 75vh;
  background: #eee;
  border-top: 1px solid #a39492;
  border-left: 1px solid #a39492;
`;

export default Grid;
