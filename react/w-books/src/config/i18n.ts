import i18next from 'i18next';
import { initReactI18next } from "react-i18next";

function requireAll(requireContext: __WebpackModuleApi.RequireContext) {
  return requireContext.keys().map(requireContext);
}

i18next
.use(initReactI18next)
.init({
  lng: 'en',
  initImmediate: false
});

requireAll(require.context('..', true, /i18n\.(js|ts)$/));
