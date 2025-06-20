interface Noticia {
  titulo: string
  resumen: string
  // otros campos...
}

export const getNoticias = async (page: number): Promise<Noticia[]> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
  const data = await response.json()
  return data.map((item: any) => ({
    titulo: item.title,
    resumen: item.body
  }))
}
