import React, { Component, FunctionComponent, LazyExoticComponent, ReactNode } from 'react';
import PATHS from './paths';

const SignUp = React.lazy(() => import('../../screens/SignUp'));
const Login = React.lazy(() => import('../../screens/Login'));
const Home = React.lazy(() => import('../../screens/Home'));
const Book = React.lazy(() => import('../../screens/Book'));

interface Route {
  exact: boolean;
  path: string;
  component: LazyExoticComponent<any>;
  private?: boolean;
}

export const ROUTES: Route[] = [
  {
    exact: true,
    path: PATHS.login,
    component: Login,
    private: false
  },
  {
    exact: true,
    path: PATHS.signUp,
    component: SignUp,
    private: false
  },
  {
    exact: true,
    path: PATHS.home,
    component: Home,
    private: true
  },
  {
    exact: true,
    path: PATHS.book,
    component: Book,
    private: true
  }
];
