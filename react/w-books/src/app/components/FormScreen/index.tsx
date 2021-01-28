import React, { ReactNode } from 'react'
import ButtonLanguage from '~components/ButtonLanguage';

import LogoWolox from '../LogoWolox';

import styles from './styles.module.scss';

interface FormScreenProps {
  children: ReactNode
}

function FormScreen({ children }: FormScreenProps) {
  return (
    <div className={styles.formScreenLayout}>
      <main className={styles.formContainer}>
        <LogoWolox className={styles.woloxLogo} />
        {children}
      </main>
      <ButtonLanguage className={styles.languagesContainer}/>
    </div>
  )
}

export default FormScreen;
