import { useNoticias } from '../hooks/useNoticias'

const NoticiasList: React.FC = () => {
  const { noticias, loading, fetchMore, isOnline } = useNoticias()

  if (!isOnline) {
    return (
      <p style={{ textAlign: 'center', marginTop: '2rem' }}>
        🔌 No tienes conexión. Las noticias no están disponibles.
      </p>
    )
  }

  return (
    <div onScroll={fetchMore}>
      {noticias.map((n, i) => (
        <div key={i}>
          <h3>{n.titulo}</h3>
          <p>{n.resumen}</p>
        </div>
      ))}
      {loading && <p>Cargando más...</p>}
    </div>
  )
}

export default NoticiasList
