import AdBlock from '../components/ads/AdBlock'

export default function Article() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Título del Artículo (Desktop)</h1>
      {/* <AdBlock /> */}
      <img src="https://picsum.photos/800/400" alt="" className="mb-4 rounded" />
      <p className="text-lg leading-relaxed mb-6">
        Este es el contenido completo del artículo. Aquí puedes incluir texto, imágenes, videos, etc. Puedes estilizar según lo necesites.
      </p>
      {/* <AdBlock /> */}
    </div>
  )
}