import { useParams } from 'react-router-dom'
import NewsBlock from '../components/blocks/NewsBlocks'

export default function Section() {
  const { slug, subslug } = useParams()
  const title = subslug ? `${slug}/${subslug}` : slug
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sección {title} (Desktop)</h1>      
      <div className="grid grid-cols-3 gap-6">
        <NewsBlock title="Noticia A" image="https://picsum.photos/300/300" summary="Resumen de la noticia A." link="/articulo/noticia-a" />
        <NewsBlock title="Noticia B" image="https://picsum.photos/300/300" summary="Resumen de la noticia B." link="/articulo/noticia-b" />
        <NewsBlock title="Noticia C" image="https://picsum.photos/300/300" summary="Resumen de la noticia C." link="/articulo/noticia-c" />
      </div>
    </div>
  )
}