import React from 'react';

import styles from './styles.module.scss';

import Form from '../../../../components/Form';
import FormRow from '../../../../components/FormRow';
import Button from '../../../../components/Button';

export default function SignUpForm() {
  return (
    <Form className={styles["sign-up-form"]}>
      <FormRow labelName="Nombre" className={styles["form-row"]} />
      <FormRow labelName="Apellido" className={styles["form-row"]} />
      <FormRow labelName="Email" className={styles["form-row"]} />
      <FormRow labelName="Password" className={styles["form-row"]} />
      <FormRow labelName="Confirmación de Password" className={styles["form-row"]} />
      <Button isFilled isSubmit>Sign Up</Button>
    </Form>
  )
}
