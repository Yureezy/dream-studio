import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface UniverseCardProps {
  icon: string
  title: string
  description: string
  color: string
  image: string
  href?: string
  target?: string 
  rel?: string    
}

export default function UniverseCard({
  icon,
  title,
  description,
  color,
  image,
  href,
  target,
  rel,
}: UniverseCardProps) {
  // Generate URL-friendly slug from title
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")

  return (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-3xl mb-2 block">{icon}</span>
        <h3 className="font-serif text-xl text-white mb-2">{title}</h3>
        <p className="text-white/80 text-sm mb-4 line-clamp-2">{description}</p>
        <Link
          href={href || `/${slug}`} // <-- Utilise href si fourni, sinon fallback sur le slug
          {...(target ? { target } : {})}
          {...(rel ? { rel } : {})}
          className="inline-flex items-center text-white text-sm font-medium hover:underline"
        >
          Découvrir <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: color }}></div>
    </div>
  )
}
