import React from 'react';

import Home from './pages/home';
import Login from './pages/login';
import Beans from './pages/beans';
import Register from './pages/register';
import Brew from './pages/brew';

import GlobalStyle from './styles/GlobalStyle';
import { StyledApp } from './styles/StyledApp';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <StyledApp>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beans" exact component={Beans} />
          <Route path="/brew" component={Brew} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </StyledApp>
    </Router>
  );
};

export default App;
