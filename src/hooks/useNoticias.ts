import { useEffect, useState } from 'react'
import { getNoticias } from '../services/noticiasService'
import { useOnlineStatus } from './useOnlineStatus'

interface Noticia {
  titulo: string
  resumen: string
}

export const useNoticias = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const isOnline = useOnlineStatus()

  const fetchMore = () => {
    if (isOnline) {
      setPage(prev => prev + 1)
    }
  }

  useEffect(() => {
    const fetchNoticias = async () => {
      if (!isOnline) return
      setLoading(true)
      const newNoticias = await getNoticias(page)
      setNoticias(prev => [...prev, ...newNoticias])
      setLoading(false)
    }
    fetchNoticias()
  }, [page, isOnline])

  return { noticias, loading, fetchMore, isOnline }
}
