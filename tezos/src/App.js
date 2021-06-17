import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import Header from './components/header/Header';

const App = () => {
    return (
        <>
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/login' component={LoginPage}/>
        </Switch>
        </>      
    )
}

export default App;