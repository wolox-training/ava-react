import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ROUTES } from './constants';

function Routes() {
  return (
    <React.Suspense fallback="Cargando...">
      <BrowserRouter>
        <Switch>
          {
            ROUTES.map(route => <Route key={route.path} component={route.component} path={route.path} exact={route.exact} />)
          }
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default Routes;
