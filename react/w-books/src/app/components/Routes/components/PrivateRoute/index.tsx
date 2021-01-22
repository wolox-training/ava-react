import React, { FunctionComponent, ReactNode } from 'react'
import { Route, Redirect } from 'react-router-dom';
import PATHS from '~components/Routes/paths';
import useSession from '../../../../../hooks/useSession';

interface PrivateRoute {
  component: React.ElementType;
  path: string;
  exact: boolean;
}

export default function PrivateRoute({ component: Component, path, exact }: PrivateRoute) {
  const { isLogged } = useSession();

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        isLogged() ? <Component {...props} /> : <Redirect to={PATHS.login} />
      }
    />
  );
}
