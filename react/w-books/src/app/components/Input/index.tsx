import React, { ChangeEvent } from 'react';

import styles from './styles.module.scss';

export interface InputProps {
  className?: string;
  id: string;
  type: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ className, id, type, handleChange }: InputProps): JSX.Element {
  return <input type={type} id={id} className={`${styles.input} ${className}`} onChange={handleChange} />;
}

export default Input;
