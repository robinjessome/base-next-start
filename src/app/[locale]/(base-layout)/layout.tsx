import '../../global.css'

import clsx from 'clsx'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'

import { Layout } from '#/components/helpers'
import { locales } from '#/config/i18n'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
	title: 'DPS Starter Kit',
	description: 'Next.js and Dato CMS starter kit for Dog and Pony Studios',
}

export default async function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode
	params: { locale: string }
}) {
	/*
  Usage of next-intl APIs in Server Components currently opts into dynamic rendering. This limitation will eventually be lifted, but as a stopgap solution, we can use the `unstable_setRequestLocale` API to enable static rendering, see https://next-intl-docs.vercel.app/docs/getting-started/app-router/with-i18n-routing#static-rendering
  */
	unstable_setRequestLocale(locale)
	// localized strings
	const messages = await getMessages()

	return (
		<html lang={locale}>
			<body className={clsx('bg-blue-100', inter.className)}>
				<NextIntlClientProvider messages={messages}>
					<Layout>{children}</Layout>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
