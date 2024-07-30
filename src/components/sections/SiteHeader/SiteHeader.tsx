import { LocaleSwitcher } from '@/components/helpers'

export default function SiteHeader() {
  return (
    <header className="border-grey-300 container flex items-center justify-between border-b py-2">
      <div>DPS Starter Kit</div>
      <LocaleSwitcher />
    </header>
  )
}
