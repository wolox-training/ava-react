import clsx from 'clsx';
import React, { ChangeEvent } from 'react';

import Input from '../Input';

import styles from './styles.module.scss';

interface FormRowProps {
  className?: string;
  labelName: string;
  inputId: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputType: string;
}

function FormRow({ labelName, className, inputId, handleInputChange, inputType }: FormRowProps): JSX.Element {
  return (
    <div className={
      clsx(styles.formRow, className && className)}>
      <label htmlFor="" className={styles.formRowLabel}>
        {labelName}
      </label>
      <Input className={styles.formRowInput} id={inputId} type={inputType} handleChange={handleInputChange} />
    </div>
  );
}

export default FormRow;
