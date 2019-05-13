import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright 2019</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Footer;
