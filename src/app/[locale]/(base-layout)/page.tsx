import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
	unstable_setRequestLocale(locale)
	const t = useTranslations('HomePage')

  return (
    <div className="my-12">
      <h1 className="text-preset-headline-bold mb-2">{t('title')}</h1>
      <p className="text-preset-body-lg">
        Elementum netus libero inceptos porta nisl odio commodo donec suspendisse aliquet in dis vestibulum eget magnis
        convallis erat ut a gravida phasellus ullamcorper vitae consectetur et habitant viverra vestibulum. Ullamcorper
        sem sodales a elit lacus pretium nisl cras leo taciti vestibulum ac fusce velit tincidunt risus erat nibh ornare
        praesent tellus proin.
      </p>
    </div>
  )
}
