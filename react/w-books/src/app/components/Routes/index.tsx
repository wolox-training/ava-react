import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { ROUTES } from './constants';

export default function Routes() {
  return (
    <React.Suspense fallback="Cargando...">
      <BrowserRouter>
        <Switch>
          {
            ROUTES.map(route => 
              route.private ? 
              <PrivateRoute component={route.component} path={route.path} exact={route.exact}/> :
              <PublicRoute component={route.component} path={route.path} exact={route.exact} restricted={route.restricted}/>
            )
          }
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  )
}
