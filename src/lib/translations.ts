import I18n, { type Config } from 'sveltekit-i18n'
import lang from './lang.json';

const config: Config = {
    translations: {
        en: { lang },
        af: { lang }
    },
    loaders: [{
        locale: 'en',
        key: 'common',
        loader: async () => (await import('./en/common.json')).default
    },
    {
        locale: 'en',
        key: 'butterChicken',
        routes: ['/posts/ButterChicken'],
        loader: async () => (await import('./en/butterChicken.json')).default
    },
    {
        locale: 'af',
        key: 'common',
        loader: async () => (await import('./af/common.json')).default
    },
    {
        locale: 'af',
        key: 'butterChicken',
        routes: ['/posts/ButterChicken'],
        loader: async () => (await import('./af/butterChicken.json')).default
    },
    ]
}

export const { t, locale, locales, translations, loading, loadTranslations } = new I18n(config)
