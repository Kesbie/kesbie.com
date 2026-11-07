import { getRelativeLocaleUrl } from 'astro:i18n';
import { defaultLang, languages, ui, type Lang, type UIKey } from './ui';

export { defaultLang, languages, ui, type Lang, type UIKey };

/** Translator bound to a locale, with Vietnamese fallback. */
export function useTranslations(lang: Lang) {
	return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key] ?? key;
}

/** Locale-aware path for the site root: `/` (vi) or `/en/` (en). */
export function getHomePath(lang: Lang): string {
	return getRelativeLocaleUrl(lang);
}

/** Full `<html lang>` value for a locale. */
export function htmlLang(lang: Lang): string {
	return lang === 'vi' ? 'vi-VN' : 'en';
}
