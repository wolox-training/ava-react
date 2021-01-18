import React from 'react';

import styles from './styles.module.scss';

import LogoWolox from '~components/LogoWolox';
import Button from '../../components/Button';
import SignUpForm from './components/SignUpForm';

export default function SignUp() {
  return (
    <div className={styles['sign-up-layout']}>
      <main className={styles['sign-up-container']}>
        <LogoWolox className={styles['wolox-logo']} />
        <SignUpForm />
        <Button>Login</Button>
      </main>
    </div>
  )
}
