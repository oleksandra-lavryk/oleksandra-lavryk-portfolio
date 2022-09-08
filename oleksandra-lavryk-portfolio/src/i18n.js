import en from "./trans/en.json";
import ua from "./trans/ua.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language"),
  fallbackLng: "en",
});

export default i18n;
