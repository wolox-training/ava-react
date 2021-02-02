import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomRoute from './components/CustomRoute';
import { ROUTES } from './constants';

function Routes() {
  return (
    <React.Suspense fallback="Cargando...">
      <BrowserRouter>
        <Switch>
          {
            ROUTES.map(route => <CustomRoute key={route.path} component={route.component} path={route.path} exact={route.exact} isPrivate={route.private}/>)
          }
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default Routes;
