import React from 'react';
import styled from 'styled-components';

const Cell = ({ id, on, verticies, updateOn }) => {
  const handleClick = () => updateOn(id);

  return <StyledCell on={on} onClick={handleClick} />;
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
