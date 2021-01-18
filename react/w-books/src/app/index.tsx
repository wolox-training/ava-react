import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUp from './screens/SignUp';
import Login from './screens/Login';

import '../scss/application.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/" exact />
        <Route component={SignUp} path="/sign_up" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
