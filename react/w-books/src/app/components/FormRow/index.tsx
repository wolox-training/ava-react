import React, { ChangeEvent } from 'react';

import Input, { InputProps } from '../Input';
import styles from './styles.module.scss';

interface FormRowProps {
  className?: string;
  labelName: string;
  inputProps: InputProps;
}

function FormRow({ labelName, className, inputProps }: FormRowProps): JSX.Element {
  return (
    <div className={`${styles["form-row"]} ${className}`}>
      <label htmlFor="" className={styles["form-row-label"]}>
        {labelName}
      </label>
      <Input className={styles["form-row-input"]} {...inputProps} />
    </div>
  );
}

export default FormRow;