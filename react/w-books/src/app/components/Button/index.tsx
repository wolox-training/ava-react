import clsx from 'clsx';
import React, { ReactNode } from 'react';
import withLoading from '../Loading';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  isFilled?: boolean;
  isSubmit?: boolean;
  isWidthAuto?: boolean;
  handleClick?: () => void;
  testId?: string;
}

function Button({ children, isSubmit, className, isFilled, isWidthAuto, handleClick, testId }: ButtonProps) {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={handleClick}
      data-testid={testId}
      className={clsx(
        'primary-btn',
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

export default withLoading(Button);
