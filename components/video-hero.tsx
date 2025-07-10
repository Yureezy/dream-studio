import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar } from "lucide-react"
import Image from "next/image"

export default function VideoHero() {
  return (
    <div className="relative h-[100vh] md:h-[105vh] w-full overflow-hidden">


      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="max-w-3xl">
          <p className="text-[#C6A76D] text-lg mb-2 animate-fade-in-up font-serif tracking-wide">
            “L’histoire commence ici…”
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
              className="text-black rounded-none px-8 py-6"
            >
              <Link href="#universes">Découvrir nos univers</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
