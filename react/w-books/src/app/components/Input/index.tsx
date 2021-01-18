import React from 'react';

import styles from './styles.module.scss';

interface InputProps {
  className?: string;
}

function Input({ className }: InputProps): JSX.Element {
  return <input type="text" className={`${styles.input} ${className}`} />;
}

export default Input;
