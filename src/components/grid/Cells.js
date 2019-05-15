import React from 'react';
import Cell from './Cell';

const Cells = ({ cellGraph }) => {
  return (
    <>
      {Object.keys(cellGraph.verticies).map(cell => (
        <Cell
          on={cellGraph.verticies[cell].on}
          id={cellGraph.verticies[cell].id}
          key={parseInt(cell)}
          cellGraph={cellGraph}
        />
      ))}
    </>
  );
};

export default Cells;
