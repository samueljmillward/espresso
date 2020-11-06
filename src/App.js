import React from 'react';

import GlobalFonts from './styles/GlobalStyle';

import Navbar from './elements/Navbar';
import GlobalStyle from './styles/GlobalStyle';

import { AppStyled } from './styles/StyledApp';

const App = () => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyle />
      <AppStyled>
        <Navbar />
      </AppStyled>
    </>
  );
};

export default App;
