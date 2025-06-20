import useIsMobile from '../utils/useIsMobile'
import HeaderMobile from '../mobile/components/Header'
import HeaderDesktop from '../desktop/components/Header'
import FooterMobile from '../mobile/components/Footer'
import FooterDesktop from '../desktop/components/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
      <main className="flex-1">{children}</main>
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
    </div>
  )
}