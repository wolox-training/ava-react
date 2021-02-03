import React from 'react';
import { useTranslation } from 'react-i18next';

import LogoWolox from '../LogoWolox';
import PATHS from '../Routes/paths';

import styles from './styles.module.scss';

import { useDispatch } from '../../contexts/UserContext';
import { actionCreators } from '../../contexts/UserContext/reducer';
import { deleteData, SESSION } from '~utils/manageData';

function Navbar() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const stopSession = () => {
    deleteData(SESSION);
    dispatch(actionCreators.resetSession());
  }

  return (
    <nav className={styles.nav}>
      <LogoWolox className={styles.navLogo} />
      <a
        onClick={stopSession}
        className={styles.navOption}
      >
        {t('Common:LogoutButton')}
      </a>
    </nav>
  )
}

export default Navbar;
