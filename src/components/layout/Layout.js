import React from 'react';
import styled from 'styled-components';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      <About />
      <Footer />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  display: grid;
  @media (max-width: 800px) {
    width: 95%;
  }
`;

export default Layout;
