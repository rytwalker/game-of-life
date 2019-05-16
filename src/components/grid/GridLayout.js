import React, { useState, useEffect } from 'react';
import delay from 'delay';
import styled from 'styled-components';
import Grid from './Grid';
import Controls from './Controls';
import Presets from './Presets';
import { initGraph } from '../../graph/Graph';

const GridLayout = () => {
  // Current initialization
  const cellGraph = initGraph(15);
  let [generation, setGeneration] = useState(0);
  const [verticies, setVerticies] = useState(cellGraph.verticies);
  const [isPlaying, setIsPlaying] = useState(true);

  // Updates the state of verticies ie on/off
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
    setVerticies(nextVerticies);
  };

  // Reset state
  const resetState = () => {
    let nextVerticies = { ...verticies };
    for (let cell in nextVerticies) {
      nextVerticies[cell] = { ...verticies[cell], on: false };
    }
    setVerticies(nextVerticies);
    setGeneration(0);
  };

  const play = async () => {
    if (isPlaying) {
      setGeneration((generation += 1));
      // setIsPlaying(!isPlaying);
      while (isPlaying) {
        console.log('playing');
        await delay(1000);
        await setGeneration((generation += 1));
      }
    }
  };

  const pause = () => {
    if (isPlaying) setIsPlaying(false);
    console.log('paused');
  };

  // Updates state of single cell returns clean copy of verticies
  const updateOn = id => {
    verticies[id].on = !verticies[id].on;
    setVerticies({ ...verticies });
  };
  useEffect(getNextFrame, [generation]);
  return (
    <StyledGridLayout>
      <Grid verticies={verticies} updateOn={updateOn} />
      <Presets />
      <Controls
        generation={generation}
        getNextFrame={setGeneration}
        resetState={resetState}
        play={play}
        pause={pause}
      />
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
