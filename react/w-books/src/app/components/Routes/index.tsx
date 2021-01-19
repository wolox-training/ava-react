import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ROUTES } from './constants';

export default function Routes() {
  return (
    <React.Suspense fallback="Cargando...">
      <BrowserRouter>
        <Switch>
          {
            ROUTES.map(route => <Route component={route.component} path={route.path} exact={route.exact} />)
          }
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  )
}
