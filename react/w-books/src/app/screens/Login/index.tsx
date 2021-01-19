import React from 'react'

import FormScreen from '../../components/FormScreen';
import Button from '../../components/Button';

import LoginForm from './components/LoginForm';

export default function index() {
  return (
    <FormScreen>
      <LoginForm />
      <Button>Sign Up</Button>
    </FormScreen>
  )
}
