import React from 'react';
import styled from 'styled-components';

const Presets = () => {
  return (
    <StyledPresets>
      <Preset>Preset 1</Preset>
      <Preset>Preset 2</Preset>
      <Preset>Preset 3</Preset>
      <Preset>Preset 4</Preset>
    </StyledPresets>
  );
};

const StyledPresets = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

const Preset = styled.button`
  background: #ececec;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  text-transform: uppercase;
  font-weight: 300;
  border: 1px solid transparent;
  @media (max-width: 800px) {
    margin-right: 2rem;
  }
`;

export default Presets;
