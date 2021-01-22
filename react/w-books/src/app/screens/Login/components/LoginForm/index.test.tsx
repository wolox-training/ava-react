import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import 'mutationobserver-shim';
import { act } from 'react-dom/test-utils';

import LoginForm from './';

const CorrectUserData = {
  email: 'agustin.vazquez@wolox.com.ar',
  password: '123456'
};

const InvalidCase1UserData = {
  email: '',
  password: ''
};

const InvalidCase2UserData = {
  email: '********$%a#@wolox.com.ar',
  password: '1ABC23'
};


describe('Login form tests', () => {
  it('Components are rendered', () => {
    render(<LoginForm testId="LoginForm" />, { wrapper: MemoryRouter });

    expect(screen.getByTestId('LoginForm')).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
  });

  it('Puts correct data and execute handleLogin', async () => {

    const { mockLogin, loginForm } = await testUser(CorrectUserData);

    await act(async ()=> {
      fireEvent.submit(loginForm);
    })

    expect(mockLogin).toHaveBeenCalled();

    const loginData = mockLogin.mock.calls[0][0];
    expect(loginData).toEqual(CorrectUserData);
  });

  it('Insert empty data and shows error message in screen', async () => {

    const { mockLogin, loginForm } = await testUser(InvalidCase1UserData);

    await act(async ()=> {
      fireEvent.submit(loginForm);
    })

    expect(mockLogin).not.toHaveBeenCalled();

    expect(loginForm).toHaveTextContent('FormValidation:Required');
  });

  it('Insert an invalid format in email field and error message in screen', async () => {

    const { mockLogin, loginForm } = await testUser(InvalidCase2UserData);

    await act(async ()=> {
      fireEvent.submit(loginForm);
    })

    expect(mockLogin).not.toHaveBeenCalled();

    expect(loginForm).toHaveTextContent('FormValidation:Format');
  });
});


const testUser = async (user: any) => {
  const mockLogin = jest.fn();
  render(<LoginForm testId="LoginForm" handleLogin={mockLogin} />, { wrapper: MemoryRouter });

  const loginForm = screen.getByTestId('LoginForm');
  const inputEmail = screen.getByTestId('email');
  const inputPassword = screen.getByTestId('password');

  await act(async ()=> {
    fireEvent.change(inputEmail, { target: { value: user.email } });
    fireEvent.change(inputPassword, { target: { value: user.password } });  
  })

  return {
    mockLogin,
    loginForm,
    inputEmail,
    inputPassword,
    screenTest: screen
  }
}