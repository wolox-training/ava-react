import React, { ChangeEvent, useState } from 'react';

import Form from '../../../../components/Form';
import FormRow from '../../../../components/FormRow';
import Button from '../../../../components/Button';

import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
    <Form className={styles.signUpForm} handleSubmit={signUp}>
      <FormRow
        labelName={t('UserFormFirstName')}
        className={styles.formRow}
        inputId="first_name"
        inputType="text"
        handleInputChange={handleInputChange}
      />
      <FormRow
        labelName={t('UserFormLastName')}
        className={styles.formRow}
        inputId="last_name"
        inputType="text"
        handleInputChange={handleInputChange}
      />
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
      <FormRow
        labelName={t('UserFormConfirmPassword')}
        className={styles.formRow}
        inputId="password_confirmation"
        inputType="password"
        handleInputChange={handleInputChange}
      />

      <Button isFilled isSubmit>{t('SignUpButton')}</Button>
    </Form>
  );
}