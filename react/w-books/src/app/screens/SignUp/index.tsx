import React from 'react';

import Button from '../../components/Button';
import FormScreen from '../../components/FormScreen';

import SignUpForm from './components/SignUpForm';

export default function SignUp() {
  return (
    <FormScreen>
      <SignUpForm />
      <Button>Login</Button>
    </FormScreen>
  );
}
