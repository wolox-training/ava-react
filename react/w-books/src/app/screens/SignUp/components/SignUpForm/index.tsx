import React, { ChangeEvent, Component } from 'react';

import Form from '../../../../components/Form';
import FormRow from '../../../../components/FormRow';
import Button from '../../../../components/Button';

import styles from './styles.module.scss';

interface SignUpFormState {
  formData: UserData;
}

interface UserData {
  email: string;
  password: string;
  password_confirmation: string;
  first_name: string;
  last_name: string;
  locale: string;
}
export default class SignUpForm extends Component<{}, SignUpFormState> {
  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.id) {
      event.persist();

      this.setState((actualState) => (
        {
          formData: { ...actualState?.formData, [event.target.id]: event.target.value }
        }
      ));
    }
  }

  signUp = () => {
    if (this.state && this.state.formData) {
      const data = { ...this.state.formData, locale: navigator.language };

      console.log(data);
    }
  }

  render() {
    return (
      <Form className={styles['sign-up-form']} handleSubmit={this.signUp}>
        <FormRow
          labelName="Nombre"
          className={styles['form-row']}
          inputProps={{
            id: 'first_name',
            handleChange: this.handleInputChange,
            type: 'text'
          }}
        />
        <FormRow
          labelName="Apellido"
          className={styles['form-row']}
          inputProps={{
            id: 'last_name',
            handleChange: this.handleInputChange,
            type: 'text'
          }}
        />
        <FormRow
          labelName="Email"
          className={styles['form-row']}
          inputProps={{
            id: 'email',
            handleChange: this.handleInputChange,
            type: 'email'
          }}
        />
        <FormRow
          labelName="Password"
          className={styles['form-row']}
          inputProps={{
            id: 'password',
            handleChange: this.handleInputChange,
            type: 'password'
          }}
        />
        <FormRow
          labelName="Confirmación de Password"
          className={styles['form-row']}
          inputProps={{
            id: 'password_confirmation',
            handleChange: this.handleInputChange,
            type: 'password'
          }}
        />

        <Button isFilled isSubmit>Sign Up</Button>
      </Form>
    );
  }
}

