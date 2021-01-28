import React from 'react'
import { Redirect } from 'react-router';
import Navbar from '~components/Navbar'
import PATHS from '~components/Routes/paths';

import useSession from '../../../hooks/useSession';

function Home() {
  const { isLogged } = useSession();
  
  return (
    <>
      {!isLogged() && <Redirect to={PATHS.login} />}
      <Navbar />
    </>
  )
}

export default Home;
