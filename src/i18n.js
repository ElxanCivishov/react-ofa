import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../public/locales/en/translation.json";
import translationAZ from "../public/locales/az/translation.json";
import translationRu from "../public/locales/ru/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  az: {
    translation: translationAZ,
  },
  ru: {
    translation: translationRu,
  },
};

const activeLang = localStorage.getItem("activeLang");
i18n.use(initReactI18next).init({
  resources,
  lng: activeLang,
  fallbackLng: "az",
});

export default i18n;
