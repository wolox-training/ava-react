import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../components/Button';
import ButtonLanguage from '../../components/ButtonLanguage';
import LogoWolox from '../../components/LogoWolox';

import SignUpForm from './components/SignUpForm';
import styles from './styles.module.scss';


export default function SignUp() {
  const { t } = useTranslation();

  return (
    <div className={styles.signUpLayout}>
      <main className={styles.signUpContainer}>
        <LogoWolox className={styles.woloxLogo} />
        <SignUpForm />
        <Button>{t('Common:LoginButton')}</Button>
      </main>
      <ButtonLanguage className={styles.languagesContainer}/>
    </div>
  );
}
