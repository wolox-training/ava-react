import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

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
          'button',
          className,
          {
            ['filled']: isFilled,
            ['auto-width']: isWidthAuto
          }
        )}
    > {children}</Link >
  );
}
