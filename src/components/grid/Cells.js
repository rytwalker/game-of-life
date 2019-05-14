import React from 'react';
import Cell from './Cell';

const Cells = () => {
  const cells = new Array(15 * 15).fill(Cell);
  console.log(cells[0]);
  console.log(cells);
  return (
    <>
      {cells.map((cell, i) => (
        <Cell key={i + 1} id={i + 1} />
      ))}
    </>
  );
};

export default Cells;
