import React from 'react';

import { Helmet } from 'react-helmet';

import Home from './pages/home';
import Beans from './pages/beans';
import Brew from './pages/brews';

import GlobalStyle from './styles/GlobalStyle';
import { StyledApp } from './styles/StyledApp';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
    <>
        <Helmet>
            <title>Espresso Tracker</title>
        </Helmet>
        <Router>
            <GlobalStyle />
            <StyledApp>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/beans' exact component={Beans} />
                    <Route path='/brews' component={Brew} />
                </Switch>
            </StyledApp>
        </Router>
    </>
);

export default App;
