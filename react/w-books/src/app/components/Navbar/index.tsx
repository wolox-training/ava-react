import React from 'react';
import { useTranslation } from 'react-i18next';

import LogoWolox from '../LogoWolox';
import PATHS from '../Routes/paths';

import styles from './styles.module.scss';

import { deleteData, SESSION } from '~utils/manageData';

function Navbar() {
  const { t } = useTranslation();
  
  const stopSession = () => deleteData(SESSION);

  return (
    <nav className={styles.nav}>
      <LogoWolox className={styles.navLogo} />
      <a
        onClick={stopSession}
        href={PATHS.login}
        className={styles.navOption}
      >
        {t('Common:LogoutButton')}
      </a>
    </nav>
  )
}

export default Navbar;
