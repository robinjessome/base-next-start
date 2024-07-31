import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/config/i18n.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	poweredByHeader: false,
}

export default withNextIntl(nextConfig)
