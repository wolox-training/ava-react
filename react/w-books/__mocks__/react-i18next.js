jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: key => key,
    i18n: { changeLanguage: jest.fn() }
  })
}));
