import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Session from '../../../../../types/Session';
import { Nullable } from '../../../../../utils/types';

import PATHS from '../../paths';

interface CustomRouteProps {
  component: React.ElementType;
  path: string;
  exact: boolean;
  isPrivate?: boolean;
  hasSession: Nullable<Session>;
}

function CustomRoute({ component: Component, path, exact, isPrivate, hasSession }: CustomRouteProps) {

  const render = (props:any) => {
    if (isPrivate) {
      return hasSession ? <Component {...props} /> : <Redirect to={PATHS.login} />;
    }
    else {
      return hasSession ? <Redirect to={PATHS.home} /> : <Component {...props} />;
    }
  }

  return (
    <Route
      exact={exact}
      path={path}
      render={render}
    />
  );
}

export default CustomRoute;
