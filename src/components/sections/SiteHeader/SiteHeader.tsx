import { LocaleSwitcher } from '#/components/helpers'

export default function SiteHeader() {
  return (
    <header className="container flex items-center justify-between border-b border-grey-300 py-2">
      <div>DPS Starter Kit</div>
      <LocaleSwitcher />
    </header>
  )
}
