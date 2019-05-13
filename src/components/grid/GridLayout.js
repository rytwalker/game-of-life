import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import Controls from './Controls';
import Presets from './Presets';

const GridLayout = () => {
  return (
    <StyledGridLayout>
      <Grid />
      <Presets />
      <Controls />
    </StyledGridLayout>
  );
};

const StyledGridLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 1fr;
  grid-gap: 2rem;
  margin-bottom: 3rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export default GridLayout;
