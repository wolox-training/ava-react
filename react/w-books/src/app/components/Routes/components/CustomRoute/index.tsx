import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PATHS from '../../paths';
import { hasData, SESSION } from '../../../../../utils/manageData';

interface CustomRouteProps {
  component: React.ElementType;
  path: string;
  exact: boolean;
  isPrivate?: boolean;
}

function CustomRoute({ component: Component, path, exact, isPrivate }: CustomRouteProps) {

  const render = (props:any) => {
    if (isPrivate) {
      return hasData(SESSION) ? <Component {...props} /> : <Redirect to={PATHS.login} />;
    }
    else {
      return hasData(SESSION) ? <Redirect to={PATHS.home} /> : <Component {...props} />;
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
