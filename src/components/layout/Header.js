import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeading>Conway's Game of life</StyledHeading>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledHeading = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 5rem;
  @media (max-width: 600px) {
    font-size: 3.6rem;
  }
`;

export default Header;
