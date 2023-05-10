import type { LanguageSchema } from '@/locales';

declare module 'vue-i18n' {
  interface DefineLocaleMessage extends LanguageSchema {
    [key: string]: string;
  }
}
