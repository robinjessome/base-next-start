import { useLocale } from 'next-intl'

export default function SiteFooter() {
  const year = new Date().getFullYear()
  const locale = useLocale()
  return (
    <footer className="container flex items-center justify-between border-t border-grey-300 py-2">
      <p>&copy; {year}</p>
      {!!locale && (
        <p>
          Current locale: <span>{locale}</span>
        </p>
      )}
    </footer>
  )
}
