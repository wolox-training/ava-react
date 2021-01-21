import React from 'react'
import LogoWolox from '~components/LogoWolox';

import styles from './styles.module.scss';

import useSession from '../../../hooks/useSession';
import PATHS from '~components/Routes/paths';

export default function Navbar() {
  const { stopSession } = useSession();

  return (
    <nav className={styles.nav}>
      <LogoWolox className={styles.navLogo}/>
      <a onClick={stopSession} href={PATHS.login} className={styles.navOption}>Logout</a>
    </nav>
  )
}