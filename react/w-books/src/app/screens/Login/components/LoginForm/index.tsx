import React, { ChangeEvent, Component } from 'react';

import Form from '../../../../components/Form';
import FormRow from '../../../../components/FormRow';
import Button from '../../../../components/Button';

import styles from './styles.module.scss';

interface LoginFormState {
  formData: UserData;
}

interface UserData {
  email: string;
  password: string;
}

export default class LoginForm extends Component<{}, LoginFormState> {
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

  login = () => {
    if (this.state && this.state.formData) {
      const data = { ...this.state.formData };

      console.log(data);
    }
  }

  render() {
    return (
      <Form className={styles['sign-up-form']} handleSubmit={this.login}>
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

        <Button isFilled isSubmit>Login</Button>
      </Form>
    );
  }
}

