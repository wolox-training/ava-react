import React, { ChangeEvent } from 'react';

import Input from '../Input';
import styles from './styles.module.scss';

interface FormRowProps {
  labelName: string;
  id: string;
  className?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function FormRow({ labelName, className, id, handleChange }: FormRowProps): JSX.Element {
  return (
    <div className={`${styles["form-row"]} ${className}`}>
      <label htmlFor="" className={styles["form-row-label"]}>
        {labelName}
      </label>
      <Input className={styles["form-row-input"]} id={id} handleChange={handleChange}/>
    </div>
  );
}

export default FormRow;