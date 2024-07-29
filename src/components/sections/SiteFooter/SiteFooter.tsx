import { useLocale } from 'next-intl'

export default function SiteFooter() {
  const year = new Date().getFullYear()
  const locale = useLocale()
  return (
    <footer className="pt-4 border-t border-grey-200 container flex justify-between items-center">
      <p>&copy; {year}</p>
      {!!locale && (
        <p>
          Current locale: <span>{locale}</span>
        </p>
      )}
    </footer>
  )
}
