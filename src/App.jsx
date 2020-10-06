import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import LoginPage from 'pages/loginPage';
import WelcomePage from 'pages/welcomePage';
import RegistrationPage from 'pages/registrationPage';
import withAuth from 'components/withAuth';

import 'style/App.css';

const AuthedWelcomePage = withAuth(WelcomePage);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/" component={AuthedWelcomePage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
