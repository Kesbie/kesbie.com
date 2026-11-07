/**
 * All UI copy lives here. `vi` is the source of truth: every other locale must
 * provide the same keys, otherwise missing keys fall back to Vietnamese.
 */
export const defaultLang = 'vi' as const;

export const languages = {
	vi: 'Tiếng Việt',
	en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
	vi: {
		'site.title': 'Kesbie Nguyễn',
		'site.description':
			'Nơi lưu trữ những trang web mình làm cho vui, để hỗ trợ mình và các homies.',
		'nav.skip': 'Chuyển đến nội dung chính',
		'hero.greeting': 'Xin chào, mình là',
		'hero.role': 'Kỹ sư phần mềm',
		'hero.intro':
			'Trang web này để lưu trữ những trang web mình làm cho vui, hỗ trợ mình và các homies.',
		'theme.toggle': 'Đổi giao diện sáng/tối',
		'lang.switch': 'Ngôn ngữ',
	},
	en: {
		'site.title': 'Kesbie Nguyen',
		'site.description':
			'An archive of the little web projects I build for fun, for myself and the homies.',
		'nav.skip': 'Skip to main content',
		'hero.greeting': "Hi, I'm",
		'hero.role': 'Software Engineer',
		'hero.intro':
			'This site is an archive of the little web projects I build for fun, to help myself and the homies.',
		'theme.toggle': 'Toggle light/dark theme',
		'lang.switch': 'Language',
	},
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
