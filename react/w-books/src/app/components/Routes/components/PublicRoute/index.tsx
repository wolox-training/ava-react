import React, { Component, FunctionComponent, ReactNode } from 'react'
import { Route, Redirect } from 'react-router-dom';

import PATHS from '../../../../components/Routes/paths';

import { hasData, SESSION } from '../../../../../utils/manageData';

interface PublicRouteProps {
  component: React.ElementType;
  restricted?: boolean;
  path: string;
  exact: boolean;
}

function PublicRoute({ component: Component, restricted, path, exact }: PublicRouteProps) {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        hasData(SESSION) && restricted ? (
          <Redirect to={PATHS.home} />
        ) : (
            <Component {...props} />
          )
      }
    />
  );
}

export default PublicRoute;
