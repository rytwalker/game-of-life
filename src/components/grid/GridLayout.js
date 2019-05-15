import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import Controls from './Controls';
import Presets from './Presets';
import Graph from '../../graph/Graph';

const GridLayout = () => {
  const cellGraph = new Graph();
  const gridArr = [];
  for (let i = 1; i <= 25; i++) {
    gridArr.push(i);
  }
  cellGraph.addVerticies(gridArr);
  cellGraph.connectEdges(5);
  let [generation, setGeneration] = useState(0);
  const [verticies, setVerticies] = useState(cellGraph.verticies);

  const getNextFrame = () => {
    let nextVerticies = { ...verticies };
    for (let cell in nextVerticies) {
      nextVerticies[cell] = { ...verticies[cell] };
    }

    for (let cellId in verticies) {
      let neighborsOn = 0;
      let cell = verticies[cellId];
      let neighbors = verticies[cellId].neighbors;

      neighbors.forEach(neighbor => {
        if (verticies[neighbor].on) neighborsOn++;
      });
      if ((cell.on && neighborsOn < 2) || neighborsOn >= 4) {
        nextVerticies[cellId].on = false;
      } else if (!cell.on && neighborsOn === 3) {
        nextVerticies[cellId].on = true;
      }
    }
    console.log(nextVerticies);
    setVerticies(nextVerticies);
    // setGeneration((generation += 1));
  };
  const updateOn = id => {
    verticies[id].on = !verticies[id].on;
    setVerticies(verticies);
  };
  useEffect(getNextFrame, [generation]);
  return (
    <StyledGridLayout>
      <Grid verticies={verticies} updateOn={updateOn} />
      <Presets />
      <Controls generation={generation} getNextFrame={setGeneration} />
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
