import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import HomePage from '../pages/home';
import LoginPage from '../pages/login';

import Header from './Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
