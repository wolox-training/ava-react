import React, { Component, FunctionComponent, ReactNode } from 'react'
import { Route, Redirect } from 'react-router-dom';

import useSession from '../../../../../hooks/useSession';

import PATHS from '../../paths';

interface PublicRouteProps {
  component: React.ElementType;
  restricted?: boolean;
  path: string;
  exact: boolean;
  hasSession: boolean;
}

export default function PublicRoute({ component: Component, restricted, path, exact, hasSession }: PublicRouteProps) {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        hasSession && restricted ? (
          <Redirect to={PATHS.home} />
        ) : (
            <Component {...props} />
          )
      }
    />
  );
}
