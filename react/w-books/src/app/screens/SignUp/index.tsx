import React from 'react';
import { useTranslation } from 'react-i18next';

import LogoWolox from '../../components/LogoWolox';
import Button from '../../components/Button';

import SignUpForm from './components/SignUpForm';
import styles from './styles.module.scss';

export default function SignUp() {
  const { t } = useTranslation();

  return (
    <div className={styles['sign-up-layout']}>
      <main className={styles['sign-up-container']}>
        <LogoWolox className={styles['wolox-logo']} />
        <SignUpForm />
        <Button>{t('LoginButton')}</Button>
      </main>
    </div>
  );
}