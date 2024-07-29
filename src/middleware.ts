import createMiddleware from 'next-intl/middleware'

import { locales } from './config/i18n'

export default createMiddleware({
  locales,
  localePrefix: 'as-needed',
  defaultLocale: 'en',
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*'],
}
