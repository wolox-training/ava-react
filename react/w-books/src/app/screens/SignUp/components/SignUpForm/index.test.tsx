import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import 'mutationobserver-shim';
import { act } from 'react-dom/test-utils';

import SignUpForm from './';

const CorrectUserData = {
  email: 'agustin.vazquez@wolox.com.ar',
  password: '123456',
  password_confirmation: '123456',
  first_name: 'Agustin',
  last_name: 'Vazquez'
};

const InvalidCase1UserData = {
  email: '',
  password: '',
  password_confirmation: '',
  first_name: '',
  last_name: ''
};

const InvalidCase2UserData = {
  email: 'agustin.vazquez@wolox.com.ar',
  password: '123',
  password_confirmation: '123456',
  first_name: 'Agustin',
  last_name: 'Vazquez'
};


const InvalidCase3UserData = {
  email: 'agustin.vazquez@wolox.com.ar',
  password: '123456',
  password_confirmation: '123456',
  first_name: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, ducimus ut quam laboriosam hic nam placeat quidem? Iure, voluptas quaerat. Voluptatem suscipit nam architecto, praesentium aliquam quae! Corporis, soluta dolore!', 
  last_name: 'Vazquez'
};

const InvalidCase4UserData = {
  email: 'agustin.vazquez@wolox.com.ar',
  password: '123456',
  password_confirmation: '123456',
  first_name: 'Agustin', 
  last_name: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, ducimus ut quam laboriosam hic nam placeat quidem? Iure, voluptas quaerat. Voluptatem suscipit nam architecto, praesentium aliquam quae! Corporis, soluta dolore!'
};

const InvalidCase5UserData = {
  email: 'agustin.vazquez@wolox.com.ar',
  password: '123456',
  password_confirmation: '123456x',
  first_name: 'Agustin',
  last_name: 'Vazquez'
};

describe('Login form tests', () => {
  it('Components are rendered', () => {
    render(<SignUpForm testId="SignUpForm" />, { wrapper: MemoryRouter });

    expect(screen.getByTestId('SignUpForm')).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getByTestId('first_name')).toBeInTheDocument();
    expect(screen.getByTestId('last_name')).toBeInTheDocument();
    expect(screen.getByTestId('password_confirmation')).toBeInTheDocument();
  });

  it('Puts correct data and execute handleSignUp', async () => {

    const { mockSignUp, signUpForm } = await testUser(CorrectUserData);

    await act(async () => {
      fireEvent.submit(signUpForm);
    })

    expect(mockSignUp).toHaveBeenCalled();

    const loginData = mockSignUp.mock.calls[0][0];
    expect(loginData).toEqual(CorrectUserData);
  });

  it('Insert empty data and must be showed an error in screen', async () => {

    const { mockSignUp, signUpForm } = await testUser(InvalidCase1UserData);

    await act(async ()=> {
      fireEvent.submit(signUpForm);
    })

    expect(mockSignUp).not.toHaveBeenCalled();

    expect(signUpForm).toHaveTextContent('FormValidation:Required');
  });

  it('insert an short password and must be showed an error in screen', async () => {

    const { mockSignUp, signUpForm } = await testUser(InvalidCase1UserData);

    await act(async ()=> {
      fireEvent.submit(signUpForm);
    })

    expect(mockSignUp).not.toHaveBeenCalled();

    expect(signUpForm).toHaveTextContent('FormValidation:Required');
  });

});

const testUser = async (user: any) => {
  const mockSignUp = jest.fn();
  render(<SignUpForm testId="LoginForm" handleSignUp={mockSignUp} />, { wrapper: MemoryRouter });

  const signUpForm = screen.getByTestId('LoginForm');
  const inputEmail = screen.getByTestId('email');
  const inputPassword = screen.getByTestId('password');
  const inputConfirmPassword = screen.getByTestId('password_confirmation');
  const inputName = screen.getByTestId('first_name');
  const inputLastName = screen.getByTestId('last_name');

  await act(async () => {
    fireEvent.change(inputEmail, { target: { value: user.email } });
    fireEvent.change(inputPassword, { target: { value: user.password } });
    fireEvent.change(inputConfirmPassword, { target: { value: user.password_confirmation } });
    fireEvent.change(inputName, { target: { value: user.first_name } });
    fireEvent.change(inputLastName, { target: { value: user.last_name } });
  })

  return {
    mockSignUp,
    signUpForm
  }
}