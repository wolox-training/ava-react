import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  isFilled?: boolean;
  isSubmit?: boolean;
  isWidthAuto?: boolean;
  handleClick?: () => void;
  isLink?: boolean;
  to?: string;
  testId?: string;
}

export default function Button({ 
  children, 
  isSubmit, 
  className, 
  isFilled, 
  isWidthAuto, 
  handleClick, 
  to, 
  isLink,
  testId
}: ButtonProps) {

  return (
    isLink ?
    <Link
      to={to ?? '/'}
      type={isSubmit ? 'submit' : 'button'}
      onClick={handleClick}
      data-testid={testId}
      className={
        clsx(
          styles.button,
          className,
          {
            [styles.filled]: isFilled,
            [styles.autoWidth]: isWidthAuto
          }
        )}
    > {children}</Link > :
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={handleClick}
      data-testid={testId}
      className={clsx(
        styles.button,
        className,
        {
          [styles.filled]: isFilled,
          [styles.autoWidth]: isWidthAuto
        }
      )}
    >
      {children}
    </button>
  );
}
