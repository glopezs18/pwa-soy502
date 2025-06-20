export function registerSWUpdate() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      console.log('[PWA] Nuevo Service Worker activado, recargando...')
      window.location.reload()
    })
  }
}
