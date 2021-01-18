import React, { Component } from 'react';

import Input from '../Input';
import styles from './styles.module.scss';

interface FormRowProps {
  labelName: string;
}

function FormRow({ labelName }: FormRowProps): JSX.Element {
  return (
    <div className={styles["form-row"]}>
      <label htmlFor="" className={styles["form-row-label"]}>
        {labelName}
      </label>
      <Input className={styles["form-row-input"]} />
    </div>
  );
}

export default FormRow;