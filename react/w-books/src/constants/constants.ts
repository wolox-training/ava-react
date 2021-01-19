import i18next from 'i18next';

const LANGS: i18next.Resource = {
  en: {
    translation: {
      "LanguageName": "English",
      "LoginButton": "Login",
      "SignUpButton": "Sign Up",
      "UserFormFirstName": "Name",
      "UserFormLastName": "Last Name",
      "UserFormEmail": "Email",
      "UserFormPassword": "Password",
      "UserFormConfirmPassword": "Confirm Password",
    }
  },
  es: {
    translation: {
      "LanguageName": "Español",
      "LoginButton": "Ingresá",
      "SignUpButton": "Registrate",
      "UserFormFirstName": "Nombre",
      "UserFormLastName": "Apellido",
      "UserFormEmail": "Email",
      "UserFormPassword": "Contraseña",
      "UserFormConfirmPassword": "Confirmacion de contraseña",
    }
  }
};

const DEFAULT_LANG = 'es';

export { LANGS, DEFAULT_LANG };