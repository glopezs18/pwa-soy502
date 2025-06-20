interface NewsBlockProps {
  title: string
  image: string
  summary: string
  link: string
}

export default function NewsBlock({ title, image, summary, link }: NewsBlockProps) {
  return (
    <a href={link} className="block mb-4 border-b pb-4">
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-md mb-2" />
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-sm text-gray-600">{summary}</p>
    </a>
  )
}