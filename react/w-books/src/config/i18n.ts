import i18next from 'i18next';
import { initReactI18next } from "react-i18next";

function requireAll(requireContext: __WebpackModuleApi.RequireContext) {
  return requireContext.keys().map(requireContext);
}

const resources = {
  en: {
    translation: {
      "LoginButton": "Login",
      "SignUpButton": "Sign Up",
      "UserFormFirstName":"Name",
      "UserFormLastName":"Last Name",
      "UserFormEmail":"Email",
      "UserFormPassword":"Password",
      "UserFormConfirmPassword":"Confirm Password",
    }
  },
  es: {
    translation: {
      "LoginButton": "Ingresá",
      "SignUpButton": "Registrate",
      "UserFormFirstName":"Nombre",
      "UserFormLastName":"Apellido",
      "UserFormEmail":"Email",
      "UserFormPassword":"Contraseña",
      "UserFormConfirmPassword":"Confirmacion de contraseña",
    }
  }
};

i18next
.use(initReactI18next)
.init({
  resources,
  lng: 'es',
  initImmediate: false
});

requireAll(require.context('..', true, /i18n\.(js|ts)$/));
