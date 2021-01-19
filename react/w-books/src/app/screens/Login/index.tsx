import React from 'react';
import { useTranslation } from 'react-i18next';

import FormScreen from '../../components/FormScreen';
import Button from '../../components/Button';

import LoginForm from './components/LoginForm';

export default function index() {
  const { t } = useTranslation();

  return (
    <FormScreen>
      <LoginForm />
      <Button>{t('SignUpButton')}</Button>
    </FormScreen>
  );
}
