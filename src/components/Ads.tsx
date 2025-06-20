import React, { useEffect } from 'react'
import { useOnlineStatus } from '../hooks/useOnlineStatus'

const Ads: React.FC = () => {
  const isOnline = useOnlineStatus()

  useEffect(() => {
    if (!isOnline) return

    const script = document.createElement('script')
    script.src = 'https://www.googletagservices.com/tag/js/gpt.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [isOnline])

  if (!isOnline) return null

  return (
    <div id="ad-slot" style={{ minHeight: 100, background: '#eee' }}>
      Publicidad cargando...
    </div>
  )
}

export default Ads
