interface NewsBlockProps {
  title: string
  image: string
  summary: string
  link: string
}

export default function NewsBlock({ title, image, summary, link }: NewsBlockProps) {
  return (
    <a href={link} className="block mb-3">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-1" />
      <h2 className="text-base font-bold leading-tight mb-1">{title}</h2>
      <p className="text-xs text-gray-500 line-clamp-2">{summary}</p>
    </a>
  )
}