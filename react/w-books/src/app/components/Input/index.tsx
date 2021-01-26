import clsx from 'clsx';
import React, { ChangeEvent, Ref } from 'react';
import { CustomElement, UseFormMethods } from 'react-hook-form';

import styles from './styles.module.scss';

export interface InputProps {
  className?: string;
  id: string;
  type: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  register?: 
  (ref: (HTMLSelectElement & HTMLTextAreaElement & CustomElement<Record<string, any>> & HTMLInputElement) | null) => void
  | Ref<HTMLInputElement>
}

function Input({ className, id, type, handleChange, register }: InputProps): JSX.Element {
  return (
    <input
      type={type}
      name={id}
      className={clsx(styles.input, className)}
      onChange={handleChange}
      ref={register}
    />
  );
}

export default Input;
