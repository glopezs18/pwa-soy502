import { useState } from 'react'
export default function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setOpen(!open)}>☰</button>
      {open && (
        <nav className="absolute bg-white w-full shadow-md p-4">
          <a href="/" className="block py-1">Inicio</a>
          <a href="/seccion/noticias" className="block py-1">Noticias</a>
          <a href="/seccion/deportes" className="block py-1">Deportes</a>
        </nav>
      )}
    </div>
  )
}