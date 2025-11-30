import { createI18n } from "vue-i18n";
import ENG from "./locales/ENG";
import FRA from "./locales/FRA";

const messages = {
  ENG,
  FRA,
};

export default createI18n({
    locale: localStorage.getItem('lang') || 'FRA',
    fallbackLocale: 'ENG',
    legacy: false,
    messages,
});
