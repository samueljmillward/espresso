import React from 'react';

import GlobalStyle from '../styles/GlobalStyle';
import Navbar from '../elements/Navbar';
import Buttons from '../elements/Buttons';

import { StyledApp } from '../styles/StyledApp';

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Navbar />
        <Buttons />
      </StyledApp>
    </>
  );
};

export default Home;
