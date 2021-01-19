import clsx from 'clsx';
import React, { ReactNode } from 'react';

import styles from './styles.module.scss';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  isFilled?: boolean;
  isSubmit?: boolean;
  isWidthAuto?: boolean;
  handleClick?: () => void;
}

export default function Button({ children, isSubmit, className, isFilled, isWidthAuto, handleClick }: ButtonProps) {

  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={handleClick}
      className={clsx(
        styles.button,
        className && className,
        {
          [styles.filled]: isFilled,
          [styles.autoWidth]: isWidthAuto
        }
      )}>
      {children}
    </button>
  );
}
