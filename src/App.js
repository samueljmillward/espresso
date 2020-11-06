import React from 'react';

import Navbar from './elements/Navbar';
import GlobalStyle from './styles/GlobalStyle';

import { AppStyled } from './styles/StyledApp';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppStyled>
        <Navbar />
      </AppStyled>
    </>
  );
};

export default App;
