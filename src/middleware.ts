import createMiddleware from 'next-intl/middleware'

import { locales, defaultLocale } from './config/i18n'

export default createMiddleware({
	locales,
	localePrefix: 'as-needed',
	defaultLocale: defaultLocale,
})

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(fr|en)/:path*'],
}
