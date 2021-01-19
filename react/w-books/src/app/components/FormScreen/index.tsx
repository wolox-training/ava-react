import React, { ReactNode } from 'react'

import LogoWolox from '../LogoWolox';

import styles from './styles.module.scss';

interface FormScreenProps {
  children: ReactNode
}

export default function FormScreen({ children }: FormScreenProps) {
  return (
    <div className={styles['form-screen-layout']}>
      <main className={styles['form-container']}>
        <LogoWolox className={styles['wolox-logo']} />
        {children}
      </main>
    </div>
  )
}
