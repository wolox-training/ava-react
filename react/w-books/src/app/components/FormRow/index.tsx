import clsx from 'clsx';
import React, { ChangeEvent, Ref } from 'react';
import { CustomElement, UseFormMethods } from 'react-hook-form';

import Input from '../Input';

import styles from './styles.module.scss';

interface FormRowProps {
  className?: string;
  labelName: string;
  inputId: string;
  handleInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  inputType: string;
  errorMessage?: string;
  inputRef?: 
  (ref: (HTMLSelectElement & HTMLTextAreaElement & CustomElement<Record<string, any>> & HTMLInputElement) | null) => void
  | Ref<HTMLInputElement>
}

function FormRow({ labelName, className, inputId, handleInputChange, inputType, inputRef, errorMessage }: FormRowProps): JSX.Element {
  return (
    <div className={
      clsx(styles.formRow, className)}>
      <label htmlFor="" className={styles.formRowLabel}>
        {labelName}
      </label>
      <Input
        className={styles.formRowInput}
        id={inputId}
        type={inputType}
        handleChange={handleInputChange}
        register={inputRef}
      />
      {errorMessage && <span className={styles.formRowError}>{errorMessage}</span>}
    </div>
  );
}

export default FormRow;
