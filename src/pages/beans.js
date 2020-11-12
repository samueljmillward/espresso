import React from 'react';

import GlobalStyle from '../styles/GlobalStyle';
import Navbar from '../elements/Navbar';

import { StyledApp } from '../styles/StyledApp';

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Navbar />
      </StyledApp>
    </>
  );
};

export default Home;
