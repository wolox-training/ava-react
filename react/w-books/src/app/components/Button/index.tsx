import React, { ReactNode } from 'react';

import styles from './styles.module.scss';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  isFilled?: boolean;
  isSubmit?: boolean;
}

export default function Button({ children, isSubmit, className, isFilled }: ButtonProps) {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`${styles.button} ${isFilled && styles.filled} ${className}`}>
      {children}
    </button>
  );
}
