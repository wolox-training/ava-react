import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import 'mutationobserver-shim';
import { act } from 'react-dom/test-utils';

import SignUpForm from './';

const cases = [
  {
    name: 'Puts correct data and execute handleSignUp',
    validate: (mockSubmit: any, formElement: any, initialData: any) => {
      expect(mockSubmit).toHaveBeenCalled();

      const loginData = mockSubmit.mock.calls[0][0];
      expect(loginData).toEqual(initialData);
    },
    data: {
      email: 'agustin.vazquez@wolox.com.ar',
      password: '123456',
      password_confirmation: '123456',
      first_name: 'Agustin',
      last_name: 'Vazquez'
    }
  },
  {
    name: 'Insert empty data and must be showed an error in screen',
    validate: (mockSubmit: any, formElement: any, initialData: any) => {
      expect(mockSubmit).not.toHaveBeenCalled();
      expect(formElement).toHaveTextContent('FormValidation:Required');
    },
    data: {
      email: '',
      password: '',
      password_confirmation: '',
      first_name: '',
      last_name: ''
    }
  },
  {
    name: 'Insert an short password and must be showed an error in screen',
    validate: (mockSubmit: any, formElement: any, initialData: any) => {
      expect(mockSubmit).not.toHaveBeenCalled();
      expect(formElement).toHaveTextContent('FormValidation:MinLength');
    },
    data: {
      email: 'agustin.vazquez@wolox.com.ar',
      password: '123',
      password_confirmation: '123456',
      first_name: 'Agustin',
      last_name: 'Vazquez'
    }
  },
  {
    name: 'Insert an long name and must be showed an error in screen',
    validate: (mockSubmit: any, formElement: any, initialData: any) => {
      expect(mockSubmit).not.toHaveBeenCalled();
      expect(formElement).toHaveTextContent('FormValidation:MaxLength');
    },
    data: {
      email: 'agustin.vazquez@wolox.com.ar',
      password: '123456',
      password_confirmation: '123456',
      first_name: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, ducimus ut quam laboriosam hic nam placeat quidem? Iure, voluptas quaerat. Voluptatem suscipit nam architecto, praesentium aliquam quae! Corporis, soluta dolore!',
      last_name: 'Vazquez'
    }
  },
  {
    name: 'Insert an long last name and must be showed an error in screen',
    validate: (mockSubmit: any, formElement: any, initialData: any) => {
      expect(mockSubmit).not.toHaveBeenCalled();
      expect(formElement).toHaveTextContent('FormValidation:MaxLength');
    },
    data: {
      email: 'agustin.vazquez@wolox.com.ar',
      password: '123456',
      password_confirmation: '123456',
      first_name: 'Agustin',
      last_name: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, ducimus ut quam laboriosam hic nam placeat quidem? Iure, voluptas quaerat. Voluptatem suscipit nam architecto, praesentium aliquam quae! Corporis, soluta dolore!'
    }
  },
  {
    name: 'Insert an different passworn in confirmation password field and must be showed an error in screen',
    validate: (mockSubmit: any, formElement: any, initialData: any) => {
      expect(mockSubmit).not.toHaveBeenCalled();
      expect(formElement).toHaveTextContent('FormValidation:Validate');
    },
    data: {
      email: 'agustin.vazquez@wolox.com.ar',
      password: '123456',
      password_confirmation: '123456x',
      first_name: 'Agustin',
      last_name: 'Vazquez'
    }
  },

];

it('Components are rendered', () => {
  render(<SignUpForm testId="SignUpForm" />, { wrapper: MemoryRouter });

  expect(screen.getByTestId('SignUpForm')).toBeInTheDocument();
  expect(screen.getByTestId('email')).toBeInTheDocument();
  expect(screen.getByTestId('password')).toBeInTheDocument();
  expect(screen.getByTestId('first_name')).toBeInTheDocument();
  expect(screen.getByTestId('last_name')).toBeInTheDocument();
  expect(screen.getByTestId('password_confirmation')).toBeInTheDocument();
});

describe('Tests to sign up form', () => {
  cases.map(oCase => {
    return it(oCase.name, async () => {
      const { mockSubmit, formElement } = await testUser(oCase.data);
      await act(async () => {
        fireEvent.submit(formElement);
      })

      oCase.validate(mockSubmit, formElement, oCase.data);
    });
  })
});

const testUser = async (user: any) => {
  const mockSubmit = jest.fn();
  render(<SignUpForm testId="LoginForm" handleSignUp={mockSubmit} />, { wrapper: MemoryRouter });

  const formElement = screen.getByTestId('LoginForm');
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
    mockSubmit,
    formElement
  }
}