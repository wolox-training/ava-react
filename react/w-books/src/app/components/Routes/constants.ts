import React, { FunctionComponent, ReactNode } from 'react';
import PATHS from './paths';

const SignUp = React.lazy(() => import('../../screens/SignUp'));
const Login = React.lazy(() => import('../../screens/Login'));
const Home = React.lazy(() => import('../../screens/Home'));

interface Route {
  exact: boolean;
  path: string;
  component: FunctionComponent;
}

const ROUTES: Route[] = [
  {
    exact: true,
    path: PATHS.login,
    component: Login
  },
  {
    exact: true,
    path: PATHS.signUp,
    component: SignUp
  },
  {
    exact: true,
    path: PATHS.home,
    component: Home
  }
];

export { ROUTES };