export function isIos(): boolean {
  return /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase())
}

export function isInStandaloneMode(): boolean {
  return 'standalone' in window.navigator && (window.navigator as any).standalone
}
