import React from 'react';

import Home from './pages/home';
import Login from './pages/login';
import Beans from './pages/beans';
import Register from './pages/register';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/beans" exact component={Beans} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
