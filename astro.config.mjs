// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://kesbie.com',
	i18n: {
		defaultLocale: 'vi',
		locales: ['vi', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [sitemap()],
	build: {
		inlineStylesheets: 'always',
	},
});
