import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import { LANGS, DEFAULT_LANG } from '../constants/constants';

function requireAll(requireContext: __WebpackModuleApi.RequireContext) {
  return requireContext.keys().map(requireContext);
}

i18next
  .use(initReactI18next)
  .init({
    resources: LANGS,
    lng: DEFAULT_LANG,
    initImmediate: false
  });

requireAll(require.context('..', true, /i18n\.(js|ts)$/));
