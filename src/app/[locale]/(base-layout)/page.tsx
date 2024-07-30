import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
	unstable_setRequestLocale(locale)
	const t = useTranslations('HomePage')

	return <h1 className="text-3xl font-bold">{t('title')}</h1>
}
