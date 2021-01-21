import React from 'react';
import { useTranslation } from 'react-i18next';

import FormScreen from '../../components/FormScreen';
import Button from '../../components/Button';

import LoginForm from './components/LoginForm';
import PATHS from '../../components/Routes/paths';

export default function index() {
  const { t } = useTranslation();

  return (
    <FormScreen>
      <LoginForm />
      <Button isLink to={PATHS.signUp}>{t('Common:SignUpButton')}</Button>
    </FormScreen>
  );
}
