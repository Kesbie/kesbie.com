# kesbie.com

Một trang duy nhất, gọn trong một màn hình: giới thiệu ngắn và danh sách link tới
những trang web mình làm cho vui. Song ngữ VI/EN, dựng bằng [Astro](https://astro.build),
không framework UI, không CSS ngoài.

## Chạy local

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # build tĩnh ra ./dist
pnpm preview  # xem thử bản build
```

## Cấu trúc

```text
src/
├── components/
│   ├── HomePage.astro          toàn bộ nội dung trang (intro + danh sách link)
│   ├── LanguageSwitcher.astro  chuyển VI/EN
│   └── ThemeToggle.astro       chuyển sáng/tối
├── i18n/
│   ├── ui.ts                   toàn bộ chuỗi giao diện VI/EN
│   ├── site.ts                 tên + domain (sửa thông tin cá nhân ở đây)
│   └── utils.ts                helper locale, đường dẫn, translator
├── layouts/Layout.astro        <head>, favicon, meta/SEO, hreflang, design tokens, script theme
├── lib/sites.ts                DANH SÁCH LINK — thêm trang mới ở đây
└── pages/
    ├── index.astro             tiếng Việt  →  /
    └── en/index.astro          tiếng Anh   →  /en/

public/
├── favicon.ico                 fallback 32x32
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-48x48.png
├── apple-touch-icon.png        180x180
├── android-chrome-192x192.png  PWA icon
├── android-chrome-512x512.png  PWA icon + og:image
└── site.webmanifest
```

## Thêm một trang vào danh sách

Mở [`src/lib/sites.ts`](src/lib/sites.ts) và thêm một dòng:

```ts
export const sites: SiteLink[] = [
	{ label: 'natty-zone.kesbie.com', url: 'https://natty-zone.kesbie.com' },
	{ label: 'ten-trang.kesbie.com', url: 'https://ten-trang.kesbie.com' },
];
```

`label` là chữ hiển thị, `url` là link mở ở tab mới. Không cần mô tả.

## Thay thông tin cá nhân

- [`src/i18n/site.ts`](src/i18n/site.ts) — `name`, `nameEn`, `url`.
- [`src/i18n/ui.ts`](src/i18n/ui.ts) — `hero.intro` (đoạn giới thiệu), `hero.role`,
  tiêu đề và mô tả trang.

## Ghi chú kỹ thuật

- Song ngữ bằng i18n routing của Astro: `/` là tiếng Việt, `/en/` là tiếng Anh, có
  `hreflang` + `x-default` và canonical riêng cho từng ngôn ngữ.
- Theme sáng/tối: mặc định theo `prefers-color-scheme`, ghi nhớ lựa chọn trong
  `localStorage`, áp dụng bằng script inline trong `<head>` nên không bị nháy màu.
- Nội dung nằm gọn trong một màn hình (`min-height: 100dvh`), không có section dài.
- Không có dependency ngoài `astro`.
