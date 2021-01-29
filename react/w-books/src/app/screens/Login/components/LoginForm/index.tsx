import React, { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';

import Form from '../../../../components/Form';
import FormRow from '../../../../components/FormRow';
import Button from '../../../../components/Button';
import PATHS from '../../../../components/Routes/paths';
import withLoading from '../../../../components/Loading';
import ErrorMessage from '../../../../components/ErrorMessage';

import styles from './styles.module.scss';

import { useLazyRequest } from '../../../../../hooks/useRequest';
import { login } from '../../../../../services/userService';
import { saveData, SESSION } from '../../../../../utils/manageData';
import Session from '../../../../../types/Session';

interface UserData {
  email?: string;
  password?: string;
}

interface LoginFormProps {
  testId?: string;
  handleLogin?: (formData: UserData) => void;
}

function LoginForm({ testId, handleLogin }: LoginFormProps) {
  const { t } = useTranslation();
  const { errors, register, handleSubmit } = useForm<UserData>();

  const [userData, loading, error, request] = useLazyRequest({
    request: (data: UserData) => login(data, setSession),
  })

  const onSubmit = (formData: UserData) => {
    if (formData) {
      request(formData)
    }
  }

  const setSession = (session: Session) => saveData(SESSION, session);

  return (
    userData ?
      <Redirect to={PATHS.home} /> :
      <Form className={styles.loginForm} handleSubmit={handleSubmit(handleLogin ?? onSubmit)} testId={testId}>
        <FormRow
          labelName={t('LoginForm:UserFormEmail')}
          className={styles.formRow}
          inputId="email"
          inputType="email"
          inputRef={
            register({
              required: t('FormValidation:Required'),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t('FormValidation:Format')
              }
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

        {error && (<ErrorMessage>{t(`LoginForm:${error.problem}`)}</ErrorMessage>)}

        {
          withLoading(Button)({
            loading,
            loadingClassName: styles.loading,
            isFilled:true, 
            isSubmit:true,
            children: t('Common:LoginButton'),
          })
        }

      </Form>
  );
}

export default LoginForm;
