import React, { FunctionComponent, ReactNode } from 'react'
import { Route, Redirect } from 'react-router-dom';
import PATHS from '~components/Routes/paths';

interface PrivateRoute {
  component: React.ElementType;
  path: string;
  exact: boolean;
  hasSession: boolean;
}

export default function PrivateRoute({ component: Component, path, exact, hasSession }: PrivateRoute) {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        hasSession ? <Component {...props} /> : <Redirect to={PATHS.login} />
      }
    />
  );
}
