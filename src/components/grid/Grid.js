import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const Grid = () => {
  const [cells, setCells] = useState([]);
  useEffect(() => {
    let curLength = 15 * 15;
    populateGrid(curLength);
  }, []);

  const populateGrid = length => {
    for (let i = 0; i < length; i++) {
      setCells(() => cells.push(i));
    }
  };

  return (
    <StyledGrid>
      {!cells.length ? 'loading' : cells.map(cell => <Cell key={cell} />)}
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
`;

export default Grid;
