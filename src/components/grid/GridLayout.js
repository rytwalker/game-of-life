import React, { useState } from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import Controls from './Controls';
import Presets from './Presets';
import Graph from '../../graph/Graph';

const GridLayout = () => {
  const [generation, setGeneration] = useState(0);
  const cellGraph = new Graph();
  cellGraph.addVerticies([1, 2, 3, 4]);
  cellGraph.connectEdges(2);
  return (
    <StyledGridLayout>
      <Grid cellGraph={cellGraph} />
      <Presets />
      <Controls generation={generation} />
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
