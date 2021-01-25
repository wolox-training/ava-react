import React from 'react';
import { useTranslation } from 'react-i18next';

import LogoWolox from '../LogoWolox';
import PATHS from '../Routes/paths';

import styles from './styles.module.scss';

import useSession from '../../../hooks/useSession';

export default function Navbar() {
  const { stopSession } = useSession();
  const { t } = useTranslation();

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
