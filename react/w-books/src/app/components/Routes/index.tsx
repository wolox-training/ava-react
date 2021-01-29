import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { ROUTES } from './constants';

function Routes() {
  return (
    <React.Suspense fallback="Cargando...">
      <BrowserRouter>
        <Switch>
          {
            ROUTES.map(route => 
              route.private ? 
              <PrivateRoute key={route.path} component={route.component} path={route.path} exact={route.exact}/> :
              <PublicRoute key={route.path} component={route.component} path={route.path} exact={route.exact} restricted={route.restricted}/>
            )
          }
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default Routes;
