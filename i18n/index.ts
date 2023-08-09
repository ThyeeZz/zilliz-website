'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import translation files
import * as en from './en/index';
import * as cn from './cn/index';

export const resources = {
  en,
  cn,
} as const;

export const defaultNS = 'common';
export const languages = Object.keys(resources);
export const defaultLanguage = 'en';

i18n.use(initReactI18next).init({
  lng: defaultLanguage,
  ns: [
    'common',
    'home',
    'cloud',
    'career',
    'attu',
    'layout',
    'blog',
    'about',
    'opensource',
    'news',
    'article',
    'learn',
    'contact',
    'whitepaper',
    'brand',
    'event',
    'userStory',
    'docs',
    'codelabs',
    'pricing',
    'invitation',
    'onboard',
    'summit',
    'comparison',
    'opensourceMilvus',
    'opensourceGptCache',
    'zillizVsMilvus',
    'partners',
    'glossary',
    'security',
    'shareYourStory',
    'resource',
    'customerStory',
    'pinecone',
    'benchmark',
    'freeTier',
    'useCases',
  ],
  keySeparator: '.',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});

/**
 * use for [lang] pages
 * defaultLanguage is render by root pages.
 * so we need filter it in [lang] pages
 * @returns
 */
export function getAllLanguageSlugs() {
  return languages
    .filter(v => v !== defaultLanguage)
    .map(lang => {
      return { params: { lang: lang } };
    });
}
