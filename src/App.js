import React from 'react';

import GlobalFonts from './styles/GlobalStyle';
import GlobalStyle from './styles/GlobalStyle';
import Login from './pages/login';
import Navbar from './elements/Navbar';

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
