export default function Article() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-3">Título del Artículo (Mobile)</h1>
      <img src="https://picsum.photos/600/300" alt="" className="mb-3 rounded" />
      <p className="text-base leading-relaxed mb-4">
        Este es el contenido del artículo en versión móvil. Puedes mostrar menos contenido o con diferente formato.
      </p>      
    </div>
  )
}
