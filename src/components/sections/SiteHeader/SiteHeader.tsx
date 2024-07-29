import { LocaleSwitcher } from '@/components/helpers'

export default function SiteHeader() {
  return (
    <header className="border-grey-200 container flex items-center justify-between border-b">
      <div>Header!</div>
      <LocaleSwitcher />
    </header>
  )
}
