import React, { useEffect } from 'react';

import { Context, useDispatch } from './contexts/UserContext';
import { reducer, INITIAL_STATE, actionCreators } from './contexts/UserContext/reducer';

import { getData, SESSION } from "../utils/manageData";

import withProvider from './components/ProviderWrapper';
import Routes from './components/Routes';

function App() {
  const dispatch = useDispatch();

  const checkSession = () => {
    const session = getData(SESSION);

    dispatch(actionCreators.setSession(session));
  }

  useEffect(()=> {
    checkSession();
  }, []);

  return (
    <Routes />
  );
}

export default withProvider({ context: Context, reducer, initialState: INITIAL_STATE })(App);
