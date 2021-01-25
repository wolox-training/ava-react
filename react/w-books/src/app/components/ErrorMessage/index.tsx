import clsx from 'clsx';
import React, { ReactNode } from 'react';

import styles from './styles.module.scss';

interface ErrorMessageProps {
  children: ReactNode;
  className?: string;
}

export default function ErrorMessage({ children, className }: ErrorMessageProps) {
  return (
    <div className={clsx(styles.errorMessage, className)}>
      {children}
    </div>
  )
}
