import React from 'react';
import { useTranslation } from 'react-i18next';
import LinkButton from '~components/Link';
import PATHS from '~components/Routes/paths';

import Button from '../../components/Button';
import FormScreen from '../../components/FormScreen';

import SignUpForm from './components/SignUpForm';


export default function SignUp() {
  const { t } = useTranslation();

  return (
    <FormScreen>
      <SignUpForm />
      <LinkButton to={PATHS.login}>{t('Common:LoginButton')}</LinkButton>
    </FormScreen>
  );
}
