import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/home';
import Login from './pages/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { StyledApp } from './styles/StyledApp';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <StyledApp>
        {/* <Login /> */}
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </StyledApp>
    </Router>
  );
};

export default App;
