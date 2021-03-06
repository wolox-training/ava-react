import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import Form from '../../../../components/Form';
import FormRow from '../../../../components/FormRow';
import Button from '../../../../components/Button';

import PATHS from '../../../../components/Routes/paths';
import ErrorMessage from '../../../../components/ErrorMessage';

import styles from './styles.module.scss';

import { useLazyRequest } from '../../../../../hooks/useRequest';
import { login } from '../../../../../services/userService';import Session from '../../../../../types/Session';
import { useDispatch } from '../../../../contexts/UserContext';
import { actionCreators } from '../../../../contexts/UserContext/reducer';
import { saveData, SESSION } from '../../../../../utils/manageData';

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
  const dispatch = useDispatch();

  const [userData, loading, error, request] = useLazyRequest({
    request: (data: UserData) => login(data, handleSession),
  })

  const onSubmit = (formData: UserData) => {
    if (formData) {
      request(formData)
    }
  }

  const handleSession = (session: Session): void => {
    saveData(SESSION, session);
    dispatch(actionCreators.setSession(session));
  }

  return (
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

        <Button
          loading={loading}
          loadingClassName={styles.loading}
          isFilled
          isSubmit
        >
          {t('Common:LoginButton')}
        </Button>

      </Form>
  );
}

export default LoginForm;
