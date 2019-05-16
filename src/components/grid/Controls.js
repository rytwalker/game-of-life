import React from 'react';
import styled from 'styled-components';

const Controls = ({ generation, getNextFrame, pause, play, resetState }) => {
  return (
    <div>
      <Control onClick={play}>Play</Control>
      <Control onClick={pause}>Pause</Control>
      <Control onClick={resetState}>Reset</Control>
      <Control onClick={() => getNextFrame(generation + 1)}>Next</Control>
      <Control>{generation}</Control>
    </div>
  );
};

const Control = styled.button`
  background: #ececec;
  margin-right: 2rem;
  padding: 1rem 1.5rem;
  text-transform: uppercase;
  font-weight: 300;
  border: 1px solid transparent;
`;

export default Controls;
