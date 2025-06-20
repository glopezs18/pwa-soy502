import { useEffect, useState } from 'react'
import { isIos } from './isIosPWA' // 👈 Importamos esto

export default function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null)
  const [canInstall, setCanInstall] = useState(false)

  useEffect(() => {
    if (isIos()) {
      console.log('[PWA] iOS detectado, no se mostrará el botón de instalación')
      return
    }

    const handler = (e: Event) => {
      e.preventDefault()
      console.log('[PWA] beforeinstallprompt triggered')
      setDeferredPrompt(e)
      setCanInstall(true)
    }

    window.addEventListener('beforeinstallprompt', handler)
    console.log('[PWA] Esperando evento beforeinstallprompt...')

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const installApp = async () => {
    if (!deferredPrompt || !(deferredPrompt as any).prompt) {
      console.log('[PWA] No hay evento disponible para instalar')
      return
    }

    const promptEvent = deferredPrompt as any
    promptEvent.prompt()

    const { outcome } = await promptEvent.userChoice
    if (outcome === 'accepted') {
      console.log('✅ PWA instalada correctamente')
    } else {
      console.log('❌ Usuario canceló la instalación')
    }

    setDeferredPrompt(null)
    setCanInstall(false)
  }

  return { canInstall, installApp }
}
