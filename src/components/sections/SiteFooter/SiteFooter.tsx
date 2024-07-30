import { useLocale } from 'next-intl'

export default function SiteFooter() {
  const year = new Date().getFullYear()
  const locale = useLocale()
  return (
    <footer className="py-2 border-t border-grey-300 container flex justify-between items-center">
      <p>&copy; {year}</p>
      {!!locale && (
        <p>
          Current locale: <span>{locale}</span>
        </p>
      )}
    </footer>
  )
}
