import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import { ROUTES } from './constants';

import { useSelector } from '../../contexts/UserContext';

export default function Routes() {
  const session = useSelector(state => state.session);

  return (
    <React.Suspense fallback="Cargando...">
      <BrowserRouter>
        <Switch>
          {
            ROUTES.map(route =>
              route.private ?
                <PrivateRoute
                  component={route.component}
                  path={route.path}
                  exact={route.exact}
                  hasSession={session ? true : false}
                /> :
                <PublicRoute
                  component={route.component}
                  path={route.path}
                  exact={route.exact}
                  restricted={route.restricted}
                  hasSession={session ? true : false}
                />
            )
          }
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  )
}
