import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import 'mutationobserver-shim';

import LoginForm from './';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { changeLanguage: jest.fn() }
  })
}));

describe('Login form tests', () => {
  it('Puts correct data', () => {
    render(<LoginForm testId="LoginForm"/>, { wrapper: MemoryRouter });
    expect(screen.getByTestId('LoginForm')).toBeInTheDocument();
  });
});
