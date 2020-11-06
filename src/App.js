import React from 'react';

import GlobalFonts from './styles/GlobalStyle';

import Navbar from './elements/Navbar';
import GlobalStyle from './styles/GlobalStyle';
import Login from './pages/login';

import { AppStyled } from './styles/StyledApp';

const App = () => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyle />
      <AppStyled>
        <Navbar />
        <Login />
      </AppStyled>
    </>
  );
};

export default App;
