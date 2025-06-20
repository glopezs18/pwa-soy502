// src/utils/useGoogleAd.ts
import { useEffect } from 'react'

interface GoogleAdProps {
  slotId: string
  adUnit: string
  sizes: number[][]
}

export function useGoogleAd({ slotId, adUnit, sizes }: GoogleAdProps) {
  useEffect(() => {
    const checkDivExists = () => !!document.getElementById(slotId)
    if (!checkDivExists()) return

    if (!window.googletag) {
      window.googletag = { cmd: [] }
    }

    const googletag = window.googletag

    // Evitar registrar el mismo slot más de una vez
    const alreadyDefined = googletag._definedSlots ?? new Set()
    if (alreadyDefined.has(slotId)) return
    googletag._definedSlots = alreadyDefined

    googletag.cmd.push(() => {
      const slot = googletag.defineSlot(`/${adUnit}`, sizes, slotId)
      if (slot) {
        slot.addService(googletag.pubads())
        googletag.enableServices()
        googletag.display(slotId)
        alreadyDefined.add(slotId)
      }
    })
  }, [slotId, adUnit, sizes])
}
