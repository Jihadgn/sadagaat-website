import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from './locales/en/translation.json'
import translationAR from './locales/ar/translation.json'
//configuration file of translation 

const availableLanguages = ["en", "ar"];

//the translations
const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },  
};

i18n
  .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step

  .use(detector) // detect user language

  .use(initReactI18next); // pass the i18n instance to react-i18next.

i18n.use(initReactI18next).init({
    //lng: 'en',
  language:'en',
  resources,
  initImmediate: true,
  fallbackLng: "en", // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
  debug: true,
  whitelist: availableLanguages,

  interpolation: {
    escapeValue: false,
  },
  /* order: [ 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain','querystring',],

  // keys or params to lookup language from
  //lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)*/

  // detection: {
  //  order: ["cookies","path", "navigator"]
  //},
  backend: {
    //loadPath: '/translation/{{lng}}.json',
    //  allowMultiLoading: false
  },
  react: {
    wait: true,
    useSuspense: false,
  },
});

export default i18n;
