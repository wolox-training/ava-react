import React, { ChangeEvent, useState } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router';

import Form from '../../../../components/Form';
import FormRow from '../../../../components/FormRow';
import Button from '../../../../components/Button';
import Loading from '../../../../components/Loading';
import ErrorMessage from '../../../../components/ErrorMessage';
import PATHS from '../../../../components/Routes/paths';

import styles from './styles.module.scss';
import { UserData } from './types';

import { postUser, SIGN_UP } from '../../../../../services/userService';
import { useLazyRequest } from '../../../../../hooks/useRequest';

function SignUpForm() {
  const { t } = useTranslation();
  const { watch, errors, register, handleSubmit } = useForm<UserData>();

  const [userData, loading, error, request] = useLazyRequest({
    request: (data: UserData) => postUser(SIGN_UP, data),
  })

  const signUp = (formData: UserData) => {
    if (formData) {
      const data = { ...formData, locale: navigator.language };

      request(data);
    }
  }

  return (
    userData ?
      <Redirect to={PATHS.home} /> :
      <Form className={styles.signUpForm} handleSubmit={handleSubmit(signUp)}>
        <FormRow
          labelName={t('SignUpForm:UserFormFirstName')}
          className={styles.formRow}
          inputId="first_name"
          inputType="text"
          inputRef={
            register({
              required: t('FormValidation:Required'),
              maxLength: {
                value: 30,
                message: t('FormValidation:MaxLength').replace('{0}', '30')
              }
            })
          }
          errorMessage={errors.first_name?.message}
        />
        <FormRow
          labelName={t('SignUpForm:UserFormLastName')}
          className={styles.formRow}
          inputId="last_name"
          inputType="text"
          inputRef={
            register({
              required: t('FormValidation:Required'),
              maxLength: {
                value: 30,
                message: t('FormValidation:MaxLength').replace('{0}', '30')
              }
            })
          }
          errorMessage={errors.last_name?.message}
        />
        <FormRow
          labelName={t('SignUpForm:UserFormEmail')}
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
          labelName={t('SignUpForm:UserFormPassword')}
          className={styles.formRow}
          inputId="password"
          inputType="password"
          inputRef={
            register({
              required: t('FormValidation:Required'),
              minLength: {
                value: 6,
                message: t('FormValidation:MinLength').replace('{0}', '6')
              }
            })
          }
          errorMessage={errors.password?.message}
        />
        <FormRow
          labelName={t('SignUpForm:UserFormConfirmPassword')}
          className={styles.formRow}
          inputId="password_confirmation"
          inputType="password"
          inputRef={register({
            required: t('FormValidation:Required'),
            validate: (value) => value === watch('password') || t('FormValidation:Validate')
          })}
          errorMessage={errors.password_confirmation?.message}
        />

        {error && (<ErrorMessage>{t(`SignUpForm:${error.problem}`)}</ErrorMessage>)}

        {
          loading ? (<div className={styles.loading}> <Loading isGreen /> </div>)
            : <Button isFilled isSubmit>{t('Common:SignUpButton')}</Button>
        }

      </Form>
  );
}

export default SignUpForm;
