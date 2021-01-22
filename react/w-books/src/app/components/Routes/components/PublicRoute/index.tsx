import React, { Component, FunctionComponent, ReactNode } from 'react'
import { Route, Redirect } from 'react-router-dom';

import useSession from '../../../../../hooks/useSession';

import PATHS from '../../paths';

interface PublicRouteProps {
  component: React.ElementType;
  restricted?: boolean;
  path: string;
  exact: boolean;
}

export default function PublicRoute({ component: Component, restricted, path, exact }: PublicRouteProps) {
  const { isLogged } = useSession();

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        isLogged() && restricted ? (
          <Redirect to={PATHS.home} />
        ) : (
            <Component {...props} />
          )
      }
    />
  );
}
