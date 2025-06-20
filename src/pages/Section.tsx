import { useParams } from 'react-router-dom'
export default function Section() {
  const { slug, subslug } = useParams()
  const title = subslug ? `${slug}/${subslug}` : slug
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">Sección: {title}</h1>
      {/* Aquí irán las noticias filtradas por sección */}
    </div>
  )
}