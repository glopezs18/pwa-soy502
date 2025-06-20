import Menu from './Menu'
export default function Header() {
  return (
    <header className="bg-white p-4 shadow-sm">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Soy502 (Mobile)</h1>
        <Menu />
      </div>
    </header>
  )
}