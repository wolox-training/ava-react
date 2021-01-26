import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from '../../../scss/common/button.module.scss';

interface LinkButtonProps {
  children: ReactNode;
  className?: string;
  isFilled?: boolean;
  isWidthAuto?: boolean;
  to?: string;
}

export default function LinkButton({ children, className, isFilled, isWidthAuto, to }: LinkButtonProps) {

  return (
    <Link
      to={to ?? '/'}
      className={
        clsx(
          styles.button,
          className,
          {
            [styles.filled]: isFilled,
            [styles.autoWidth]: isWidthAuto
          }
        )}
    > {children}</Link >
  );
}
