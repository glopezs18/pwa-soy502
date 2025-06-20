// src/types/global.d.ts
export {}

declare global {
  interface Window {
    googletag: any & {
      _definedSlots?: Set<string>
    }
  }
}
