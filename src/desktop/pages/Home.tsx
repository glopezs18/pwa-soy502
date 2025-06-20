import NewsBlock from '../components/blocks/NewsBlocks'
import AdBlock from '../components/ads/AdBlock'
import usePWAInstall from '../../utils/usePWAInstall'
import { isIos, isInStandaloneMode } from '../../utils/isIosPWA'

export default function Home() {
  const { canInstall, installApp } = usePWAInstall()
  return (
    <div className="p-6">
      {canInstall && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={installApp}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow"
          >
            Instalar App
          </button>
        </div>
      )}

      {isIos() && !isInStandaloneMode() && (
        <div className="bg-yellow-100 text-yellow-800 text-sm text-center p-2 px-4 shadow-md">
          📲 Para instalar esta app en tu dispositivo iOS, toca <strong>Compartir</strong> y selecciona <strong>“Añadir a inicio”</strong>.
        </div>
      )}
      <h1 className="text-2xl font-bold mb-4">Portada (Desktop)</h1>
      <AdBlock />
      <div className="grid grid-cols-3 gap-6">
        <NewsBlock title="Noticia 1" image="https://picsum.photos/300/300" summary="Resumen breve de la noticia 1." link="/articulo/noticia-1" />
        <NewsBlock title="Noticia 2" image="https://picsum.photos/300/300" summary="Resumen breve de la noticia 2." link="/articulo/noticia-2" />
        <NewsBlock title="Noticia 3" image="https://picsum.photos/300/300" summary="Resumen breve de la noticia 3." link="/articulo/noticia-3" />
      </div>
    </div>
  )
}