import clsx from 'clsx';
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
      className={clsx(
        styles.button,
        className && className,
        {
          [styles.filled]: isFilled
        }
      )}>
      {children}
    </button>
  );
}
