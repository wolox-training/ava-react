import React, { ChangeEvent, useState } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../../../components/Form';
import FormRow from '../../../../components/FormRow';
import Button from '../../../../components/Button';

import styles from './styles.module.scss';
import { UserData } from './types';

export default function SignUpForm() {
  const { t } = useTranslation();
  const { errors, register, handleSubmit } = useForm<UserData>();

  const signUp = (formData: UserData) => {
    if (formData) {
      const data = { ...formData, locale: navigator.language };

      console.log(data);
    }
  }

  const getError = (error: FieldError | undefined): string | undefined => {
    if (!error) return;
    console.log(error);

    switch (error.type) {
      case "required": {
        return t('FormValidationRequired')
      }
      case "maxLength": {
        return t('FormValidationMaxLength').replace('{0}', error.message ?? '')
      }
      case "minLength": {
        return t('FormValidationMinLength').replace('{0}', error.message ?? '')
      }
      default: return ""
    }
  }

  return (
    <Form className={styles.signUpForm} handleSubmit={handleSubmit(signUp)}>
      <FormRow
        labelName={t('UserFormFirstName')}
        className={styles.formRow}
        inputId="first_name"
        inputType="text"
        inputRef={
          register({
            required: true,
            maxLength: {
              value: 30,
              message: '30'
            }
          })
        }
        errorMessage={getError(errors.first_name)}
      />
      <FormRow
        labelName={t('UserFormLastName')}
        className={styles.formRow}
        inputId="last_name"
        inputType="text"
        inputRef={
          register({
            required: true,
            maxLength: {
              value: 30,
              message: '30'
            }
          })
        }
        errorMessage={getError(errors.last_name)}
      />
      <FormRow
        labelName={t('UserFormEmail')}
        className={styles.formRow}
        inputId="email"
        inputType="email"
        inputRef={
          register({
            required: true
          })
        }
        errorMessage={getError(errors.email)}
      />
      <FormRow
        labelName={t('UserFormPassword')}
        className={styles.formRow}
        inputId="password"
        inputType="password"
        inputRef={
          register({
            required: true,
            minLength: {
              value: 6,
              message: '6'
            }
          })
        }
        errorMessage={getError(errors.password)}
      />
      <FormRow
        labelName={t('UserFormConfirmPassword')}
        className={styles.formRow}
        inputId="password_confirmation"
        inputType="password"
        inputRef={register({ required: true })}
        errorMessage={getError(errors.password_confirmation)}
      />

      <Button isFilled isSubmit>{t('SignUpButton')}</Button>
    </Form>
  );
}
