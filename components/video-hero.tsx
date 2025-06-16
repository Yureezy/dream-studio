import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar } from "lucide-react"
import Image from "next/image"

export default function VideoHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0">
        <Image
          src="/banner.jpg"
          alt="Dream Studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6">
            Dream Studio
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Un espace premium au cœur de Montpellier alliant charme authentique et modernité pour tous vos projets
            créatifs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="border-[#C6A76D] text-[#C6A76D] bg-white hover:text-white rounded-none px-8 py-6">
              <Link href="/reservation">
                <Calendar className="mr-2 h-5 w-5" /> Réserver une session
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-black hover:text-[#C6A76D] rounded-none px-8 py-6"
            >
              <Link href="#universes">Découvrir nos univers</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
