import React from 'react';
import styled from 'styled-components';

const Presets = () => {
  return (
    <StyledPresets>
      <button>Preset 1</button>
      <button>Preset 2</button>
      <button>Preset 3</button>
      <button>Preset 4</button>
    </StyledPresets>
  );
};

const StyledPresets = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Presets;
