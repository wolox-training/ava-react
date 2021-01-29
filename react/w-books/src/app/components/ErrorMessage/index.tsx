import React, { ReactNode } from 'react';

import styles from './styles.module.scss';

interface ErrorMessageProps {
  children: ReactNode;
}

function ErrorMessage({children}:ErrorMessageProps) {
  return (
    <div className={styles.errorMessage}>
      {children}
    </div>
  )
}

export default ErrorMessage;
