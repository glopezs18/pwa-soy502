import { useGoogleAd } from '../../../utils/useGoogleAd'

export default function AdBlock() {
  const slotId = 'div-gpt-ad-mobile-top-portada' // SLOT ÚNICO
  useGoogleAd({
    slotId,
    adUnit: '82890815/Mobile_Box_Top_Portada',
    sizes: [[336, 280]]
  })

  return <div id={slotId} className="my-4 mx-auto w-full text-center" />
}
