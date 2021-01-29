import React, { FunctionComponent, ReactNode } from 'react'
import { Route, Redirect } from 'react-router-dom';

import PATHS from '../../../../components/Routes/paths';

import { hasData, SESSION } from '../../../../../utils/manageData';

interface PrivateRoute {
  component: React.ElementType;
  path: string;
  exact: boolean;
}

function PrivateRoute({ component: Component, path, exact }: PrivateRoute) {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        hasData(SESSION) ? <Component {...props} /> : <Redirect to={PATHS.login} />
      }
    />
  );
}

export default PrivateRoute;
