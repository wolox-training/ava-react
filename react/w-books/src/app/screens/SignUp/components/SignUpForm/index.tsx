import React, { ChangeEvent, useState } from 'react';

import Form from '../../../../components/Form';
import FormRow from '../../../../components/FormRow';
import Button from '../../../../components/Button';

import styles from './styles.module.scss';

interface UserData {
  email?: string;
  password?: string;
  password_confirmation?: string;
  first_name?: string;
  last_name?: string;
  locale?: string;
}

export default function SignUpForm() {
  const [formData, setFormData] = useState<UserData | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.id) {
      event.persist();

      setFormData((actualFormData: UserData | null) =>
        ({ ...actualFormData, [event.target.id]: event.target.value })
      );
    }
  }

  const signUp = () => {
    if (formData) {
      const data = { ...formData, locale: navigator.language };

      console.log(data);
    }
  }

  return (
    <Form className={styles['sign-up-form']} handleSubmit={signUp}>
      <FormRow
        labelName="Nombre"
        className={styles['form-row']}
        inputProps={{
          id: 'first_name',
          handleChange: handleInputChange,
          type: 'text'
        }}
      />
      <FormRow
        labelName="Apellido"
        className={styles['form-row']}
        inputProps={{
          id: 'last_name',
          handleChange: handleInputChange,
          type: 'text'
        }}
      />
      <FormRow
        labelName="Email"
        className={styles['form-row']}
        inputProps={{
          id: 'email',
          handleChange: handleInputChange,
          type: 'email'
        }}
      />
      <FormRow
        labelName="Password"
        className={styles['form-row']}
        inputProps={{
          id: 'password',
          handleChange: handleInputChange,
          type: 'password'
        }}
      />
      <FormRow
        labelName="Confirmación de Password"
        className={styles['form-row']}
        inputProps={{
          id: 'password_confirmation',
          handleChange: handleInputChange,
          type: 'password'
        }}
      />

      <Button isFilled isSubmit>Sign Up</Button>
    </Form>
  );
}