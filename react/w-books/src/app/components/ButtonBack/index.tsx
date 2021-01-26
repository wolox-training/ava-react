import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import PATHS from '../Routes/paths';

import styles from './styles.module.scss';

interface ButtonBackProps {
  path: typeof PATHS.signUp |  typeof PATHS.login |  typeof PATHS.book |  typeof PATHS.home; 
}

export default function ButtonBack({ path }: ButtonBackProps) {
  const { t } = useTranslation();
  return (
    <Link to={path} className={styles.buttonBack}>{t('ButtonBack:Text')}</Link>
  )
}
