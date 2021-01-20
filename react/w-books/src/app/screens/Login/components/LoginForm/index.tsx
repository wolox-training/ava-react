import React, { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Form from '../../../../components/Form';
import FormRow from '../../../../components/FormRow';
import Button from '../../../../components/Button';

import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';

interface UserData {
  email?: string;
  password?: string;
}

export default function LoginForm() {
  const { t } = useTranslation();
  const { errors, register, handleSubmit } = useForm<UserData>();

  const login = (formData: UserData) => {
    if (formData) {
      const data = { ...formData, locale: navigator.language };

      console.log(data);
    }
  }

  return (
    <Form className={styles.loginForm} handleSubmit={handleSubmit(login)}>
      <FormRow
        labelName={t('LoginForm:UserFormEmail')}
        className={styles.formRow}
        inputId="email"
        inputType="email"
        inputRef={
          register({
            required: t('FormValidation:Required'),
          })
        }
        errorMessage={errors.email?.message}
      />
      <FormRow
        labelName={t('LoginForm:UserFormPassword')}
        className={styles.formRow}
        inputId="password"
        inputType="password"
        inputRef={
          register({
            required: t('FormValidation:Required'),
          })
        }
        errorMessage={errors.password?.message}
      />

      <Button isFilled isSubmit>{t('Common:LoginButton')}</Button>
    </Form>
  );
}