import React from 'react';

import styles from './styles.module.scss';

interface ButtonProps {
  buttonText: string;
  className?: string;
  isFilled?: boolean;
  isSubmit?: boolean;
}

export default function Button({ buttonText, isSubmit, className, isFilled }: ButtonProps) {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`${styles.button} ${isFilled && styles.filled} ${className}`}>
      {buttonText}
    </button>
  );
}
