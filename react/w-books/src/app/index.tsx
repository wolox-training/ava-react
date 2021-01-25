import React from 'react';

import { Context } from './contexts/UserContext';
import { reducer, INITIAL_STATE} from './contexts/UserContext/reducer';

import withProvider from './components/ProviderWrapper';
import Routes from './components/Routes';

function App() {
  return (
    <Routes/>
  );
}

export default withProvider({ context: Context, reducer, initialState: INITIAL_STATE })(App);
