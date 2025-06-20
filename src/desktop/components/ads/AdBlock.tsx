import { useGoogleAd } from '../../../utils/useGoogleAd'

export default function AdBlock() {
  const slotId = 'div-gpt-ad-desktop-top-portada' // SLOT DIFERENTE
  useGoogleAd({
    slotId,
    adUnit: '82890815/Desktop_Box_Top_Portada',
    sizes: [[728, 90]]
  })

  return <div id={slotId} className="my-4 mx-auto w-full text-center" />
}

