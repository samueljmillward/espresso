import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
// import Login from './pages/login';
import Home from './pages/home';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';

import { StyledApp } from './styles/StyledApp';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        {/* <Login /> */}
        <Home />
      </StyledApp>
    </>
  );
};

export default App;
