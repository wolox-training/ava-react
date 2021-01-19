import React, { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Form from '../../../../components/Form';
import FormRow from '../../../../components/FormRow';
import Button from '../../../../components/Button';

import styles from './styles.module.scss';

interface UserData {
  email?: string;
  password?: string;
}

export default function LoginForm() {
  const [formData, setFormData] = useState<UserData | null>(null);
  const { t } = useTranslation();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.id) {
      event.persist();

      setFormData((actualFormData: UserData | null) =>
        ({ ...actualFormData, [event.target.id]: event.target.value })
      );
    }
  }

  const login = () => {
    if (formData) {
      const data = { ...formData };

      console.log(data);
    }
  }

  return (
    <Form className={styles.loginForm} handleSubmit={login}>
      <FormRow
        labelName={t('UserFormEmail')}
        className={styles.formRow}
        inputId="email"
        inputType="email"
        handleInputChange={handleInputChange}
      />
      <FormRow
        labelName={t('UserFormPassword')}
        className={styles.formRow}
        inputId="password"
        inputType="password"
        handleInputChange={handleInputChange}
      />

      <Button isFilled isSubmit>{t('LoginButton')}</Button>
    </Form>
  );
}