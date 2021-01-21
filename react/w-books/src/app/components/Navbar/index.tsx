import React from 'react'
import LogoWolox from '~components/LogoWolox';

import styles from './styles.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <LogoWolox className={styles.navLogo}/>
      <a href="/login.html" className={styles.navOption}>Logout</a>
    </nav>
  )
}
