import React, { ReactNode, Component } from 'react';

interface FormProps {
  handleSubmit?: (event: React.FormEvent) => void;
  children: ReactNode;
  className?: string;
  testId?: string;
}

export default function Form({ handleSubmit, className, children, testId }: FormProps) {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    handleSubmit?.(event);
  };
  
  return (
    <form onSubmit={handleFormSubmit} className={className} data-testid={testId}>
      {children}
    </form>
  );
}
