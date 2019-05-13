import React, { useState } from 'react';
import styled from 'styled-components';

const Cell = () => {
  const [on, setOn] = useState(false);
  return <StyledCell on={on} onClick={() => setOn(!on)} />;
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
