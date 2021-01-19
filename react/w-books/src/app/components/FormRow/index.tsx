import clsx from 'clsx';
import React from 'react';

import Input, { InputProps } from '../Input';

import styles from './styles.module.scss';

interface FormRowProps {
  className?: string;
  labelName: string;
  inputProps: InputProps;
}

function FormRow({ labelName, className, inputProps }: FormRowProps): JSX.Element {
  return (
    <div className={
      clsx(styles.formRow, className && className)}>
      <label htmlFor="" className={styles.formRowLabel}>
        {labelName}
      </label>
      <Input className={styles.formRowInput} {...inputProps} />
    </div>
  );
}

export default FormRow;
