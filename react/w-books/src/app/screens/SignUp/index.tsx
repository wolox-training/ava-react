import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../components/Button';
import FormScreen from '../../components/FormScreen';

import SignUpForm from './components/SignUpForm';


export default function SignUp() {
  const { t } = useTranslation();

  return (
    <FormScreen>
      <SignUpForm />
      <Button>{t('LoginButton')}</Button>
    </FormScreen>
  );
}