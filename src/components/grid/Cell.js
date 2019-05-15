import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Cell = ({ id, initOn, verticies, updateOn }) => {
  // const [on, setOn] = useState(initOn);
  const handleClick = () => {
    // verticies[id]['on'] = !on;
    // setOn(!on);
    updateOn(id);
    console.log(verticies);
  };

  return <StyledCell on={initOn} onClick={handleClick} />;
};

const StyledCell = styled.div`
  border-right: 1px solid #a39492;
  border-bottom: 1px solid #a39492;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: ${({ on }) => (on ? '#1869EF' : '#E9EBF3')};
`;

export default Cell;
