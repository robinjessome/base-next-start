import { SiteFooter, SiteHeader } from '@/components/sections'

export type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="">
      <SiteHeader />
      <main className="container my-4">{children}</main>
      <SiteFooter />
    </div>
  )
}
