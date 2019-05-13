import React from 'react';
import Cell from './Cell';

const Cells = () => {
  const cells = new Array(15 * 15).fill(0);

  console.log(cells);
  return (
    <>
      {cells.map(cell => (
        <Cell />
      ))}
    </>
  );
};

export default Cells;
