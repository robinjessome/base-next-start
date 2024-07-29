import { locales } from '@/config/i18n'
import { useLocale } from 'next-intl'
import clsx from 'clsx'

import Link from 'next/link'

export default function LocaleSwitcher() {
  const locale = useLocale()

  return (
    <ul className="">
      {locales.map((loc) => (
        <li key={loc}>
          <Link className={clsx('', locale === loc && 'font-bold text-blue-800')} href={`/${loc}`}>
            {loc.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  )
}
