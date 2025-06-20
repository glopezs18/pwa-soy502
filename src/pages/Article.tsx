import { useParams } from 'react-router-dom'
export default function Article() {
  const { slug } = useParams()
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Artículo: {slug?.replace(/-/g, ' ')}</h1>
      {/* Aquí va el contenido del artículo */}
    </div>
  )
}