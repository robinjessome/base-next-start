import clsx from 'clsx'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { locales } from '#/config/i18n'

export default function LocaleSwitcher() {
  const locale = useLocale()

  return (
    <ul className="flex gap-2">
      {locales.map((loc) => (
        <li key={loc}>
          <Link className={clsx(locale === loc && 'font-bold text-blue-800')} href={`/${loc}`}>
            {loc.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  )
}
