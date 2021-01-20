import React, { ReactNode, Component } from 'react';

interface FormProps {
  handleSubmit?: (event: React.FormEvent) => void;
  children: ReactNode;
  className?: string;
}

export default function Form({ handleSubmit, className, children }: FormProps) {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    handleSubmit?.(event);
  };
  
  return (
    <form onSubmit={handleFormSubmit} className={className}>
      {children}
    </form>
  );
}
