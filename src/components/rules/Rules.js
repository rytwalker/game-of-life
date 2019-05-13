import React from 'react';
import styled from 'styled-components';
import Rule from './Rule';
import rulesData from './rulesData';

const Rules = () => {
  return (
    <div>
      <Heading>Rules</Heading>
      <ul>
        {rulesData.map(rule => (
          <Rule key={rule.id} rule={rule.content} />
        ))}
      </ul>
    </div>
  );
};

const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 1rem;
  @media (max-width: 800px) {
    font-size: 2.6rem;
  }
`;

export default Rules;
