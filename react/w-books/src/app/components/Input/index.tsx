import React, { ChangeEvent } from 'react';

import styles from './styles.module.scss';

interface InputProps {
  className?: string;
  id: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ className, id, handleChange }: InputProps): JSX.Element {
  return <input type="text" id={id} className={`${styles.input} ${className}`} onChange={handleChange}/>;
}

export default Input;
