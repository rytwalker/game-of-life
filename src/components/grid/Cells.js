import React from 'react';
import Cell from './Cell';

const Cells = ({ verticies, updateOn }) => {
  return (
    <>
      {Object.keys(verticies).map(cell => (
        <Cell
          initOn={verticies[cell].on}
          id={verticies[cell].id}
          key={parseInt(cell)}
          verticies={verticies}
          updateOn={updateOn}
        />
      ))}
    </>
  );
};

export default Cells;
