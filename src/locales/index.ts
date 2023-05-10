import { createI18n, useI18n as useI18nAlias } from 'vue-i18n';
import messages from '@intlify/unplugin-vue-i18n/messages';

import en from '@/locales/languages/en_US.json';
import { LOCALES, LOCALE_KEY, LOCALE_DEFAULT } from '@/constant/global';
import { localStorage } from '@/utils/storage';

export type LanguageSchema = typeof en;
type LoaclesType = (typeof LOCALES)[number];

// docs https://vue-i18n.intlify.dev/guide/introduction.html
const i18n = createI18n<[LanguageSchema], LoaclesType, false>({
  legacy: false,
  locale: localStorage.get(LOCALE_KEY) || LOCALE_DEFAULT,
  fallbackLocale: LOCALE_DEFAULT,
  messages
});

export const useI18n = () => {
  return useI18nAlias<{ message: LanguageSchema }, LoaclesType>();
};

// 全局i18n实例
export const i18nGlobalInstance = i18n.global;

export default i18n;
