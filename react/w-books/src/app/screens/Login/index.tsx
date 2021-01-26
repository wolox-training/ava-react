import React from 'react';
import { useTranslation } from 'react-i18next';

import FormScreen from '../../components/FormScreen';
import PATHS from '../../components/Routes/paths';
import LinkButton from '../../components/Link';

import LoginForm from './components/LoginForm';

export default function index() {
  const { t } = useTranslation();

  return (
    <FormScreen>
      <LoginForm />
      <LinkButton to={PATHS.signUp}>{t('Common:SignUpButton')}</LinkButton>
    </FormScreen>
  );
}
