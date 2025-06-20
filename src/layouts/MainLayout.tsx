import useIsMobile from '../utils/useIsMobile'
import HeaderMobile from '../mobile/components/Header'
import HeaderDesktop from '../desktop/components/Header'
import FooterMobile from '../mobile/components/Footer'
import FooterDesktop from '../desktop/components/Footer'
import useOnlineStatus from '../utils/useOnlineStatus'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()
  const isOnline = useOnlineStatus()

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}

      {!isOnline && (
        <div className="bg-red-100 text-red-700 text-center p-4 font-medium">
          ⚠️ No tienes conexión a internet. Este sitio requiere estar en línea para mostrar contenido y publicidad.
        </div>
      )}
      <main className="flex-1">
        {isOnline ? children : null}
      </main>
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
    </div>
  )
}