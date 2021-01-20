import i18next from 'i18next';
import { initReactI18next } from "react-i18next";

function requireAll(requireContext: __WebpackModuleApi.RequireContext) {
  return requireContext.keys().map(requireContext);
}

const resources = {
  en: {
    translation: {
      "LoginButton": "Login",
      "SignUpButton": "Sign Up"
    }
  },
  es: {
    translation: {
      "LoginButton": "Ingresá",
      "SignUpButton": "Registrate"
    }
  }
};

i18next
.use(initReactI18next)
.init({
  resources,
  lng: 'en',
  initImmediate: false
});

requireAll(require.context('..', true, /i18n\.(js|ts)$/));
