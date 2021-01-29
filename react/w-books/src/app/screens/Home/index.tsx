import React from 'react'
import { Redirect } from 'react-router';
import Navbar from '~components/Navbar'
import PATHS from '~components/Routes/paths';
import { hasData, SESSION } from '~utils/manageData';

function Home() {
  
  return (
    <>
      {!hasData(SESSION) && <Redirect to={PATHS.login} />}
      <Navbar />
    </>
  )
}

export default Home;
