import React from 'react';
import styled from 'styled-components';

const Controls = ({ generation, getNextFrame }) => {
  return (
    <div>
      <Control>Play</Control>
      <Control>Pause</Control>
      <Control>Reset</Control>
      <Control onClick={() => getNextFrame((generation += 1))}>Next</Control>
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
