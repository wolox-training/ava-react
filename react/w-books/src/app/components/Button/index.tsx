import clsx from 'clsx';
import React, { ReactNode } from 'react';

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
        'button',
        className,
        {
          ['filled']: isFilled,
          ['auto-width']: isWidthAuto
        }
      )}
    >
      {children}
    </button>
  );
}
