import React from 'react'
import { useOnlineStatus } from '../hooks/useOnlineStatus'

const OfflineAlert: React.FC = () => {
  const isOnline = useOnlineStatus()

  if (isOnline) return null

  return (
    <div style={{
      backgroundColor: '#ff4d4d',
      color: '#fff',
      padding: '12px',
      textAlign: 'center',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000
    }}>
      🛑 Estás sin conexión a internet. Conéctate para ver nuestro contenido.
    </div>
  )
}

export default OfflineAlert
