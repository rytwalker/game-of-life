import React from 'react';
import styled from 'styled-components';
import Rules from '../rules/Rules';
const About = () => {
  return (
    <Column>
      <section>
        <Heading>ABOUT THIS ALGORITHM</Heading>
        <p>
          Kickstarter pinterest helvetica, bitters craft beer locavore
          asymmetrical coloring book distillery hella bushwick try-hard.
          Knausgaard mixtape bicycle rights banjo, man bun tilde keytar four
          dollar toast. Waistcoat hella post-ironic live-edge. Mixtape lyft
          meditation, tilde quinoa bushwick pop-up salvia deep v butcher kogi
          XOXO hammock freegan. Neutra forage succulents, artisan adaptogen hell
          of paleo tote bag vice selvage. Pop-up pickled franzen pabst direct
          trade. Raw denim pinterest green juice fixie.
        </p>
      </section>
      <Rules />
    </Column>
  );
};

const Column = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 1rem;
  @media (max-width: 800px) {
    font-size: 2.6rem;
  }
`;

export default About;
