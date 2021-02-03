import React, { ReactNode } from 'react'

import Navbar from '../Navbar';
import ErrorMessage from '../ErrorMessage';
import ButtonLanguage from '../ButtonLanguage';

import styles from './styles.module.scss';

interface LayoutProps {
  children: ReactNode;
  error?: any;
  errorMessage?: string;
}

function Layout({ children, error, errorMessage }: LayoutProps) {
  return (
    <>
      <Navbar />

      {error && (<ErrorMessage className={styles.container}>{errorMessage}</ErrorMessage>)}

      {children}

      <ButtonLanguage className={styles.languagesContainer} />
    </>
  )
}

export default Layout;
