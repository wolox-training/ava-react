import i18next from 'i18next';

export const LANGS: i18next.Resource = {
  en: {
    translation: {
      "LanguageName": "English",
      "LoginButton": "Login",
      "SignUpButton": "Sign Up",
    }
  },
  es: {
    translation: {
      "LanguageName": "Español",
      "LoginButton": "Ingresá",
      "SignUpButton": "Registrate",
    }
  }
};

export const DEFAULT_LANG = 'es';
