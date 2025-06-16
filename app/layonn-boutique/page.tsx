import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Tag, Clock, ChevronRight } from "lucide-react"
import ReservationCta from "@/components/reservation-cta"

export default function LayonnBoutiquePage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E6DED3] to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-5xl mb-4 block">🌂</span>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-stone-800">Boutique LAYONN</h1>
              <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                Un corner store élégant mettant en lumière la marque de mode haut de gamme Layonn et ses collections
                slow fashion. Découvrez nos parfums, accessoires et pièces de prêt-à-porter conçus avec passion et
                éthique.
              </p>
              <Button asChild className="bg-[#C6A76D] hover:bg-[#b89355] text-white rounded-none px-8 py-6">
                <Link href="/reservation#booking-calendar">
                  <ShoppingBag className="mr-2 h-5 w-5" /> Découvrir la collection
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=500&width=600" alt="Boutique LAYONN" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center text-stone-800">
            Nos collections
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-96 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Prêt-à-porter"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl text-white mb-2">Prêt-à-porter</h3>
                <p className="text-white/80 mb-4">
                  Des pièces intemporelles, conçues avec des matériaux nobles et durables.
                </p>
                <Link
                  href="/layonn-boutique/pret-a-porter"
                  className="inline-flex items-center text-white text-sm font-medium hover:underline"
                >
                  Découvrir <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-96 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Accessoires"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl text-white mb-2">Accessoires</h3>
                <p className="text-white/80 mb-4">Des accessoires raffinés qui subliment chaque tenue avec élégance.</p>
                <Link
                  href="/layonn-boutique/accessoires"
                  className="inline-flex items-center text-white text-sm font-medium hover:underline"
                >
                  Découvrir <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-96 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Parfums"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl text-white mb-2">Parfums</h3>
                <p className="text-white/80 mb-4">Des fragrances exclusives qui racontent une histoire unique.</p>
                <Link
                  href="/layonn-boutique/parfums"
                  className="inline-flex items-center text-white text-sm font-medium hover:underline"
                >
                  Découvrir <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-[#E6DED3] bg-opacity-30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Notre philosophie"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-stone-800">Notre philosophie</h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Chez LAYONN, nous croyons en une mode responsable et durable. Chaque pièce est conçue avec soin,
                fabriquée dans le respect de l'environnement et des artisans qui y contribuent.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Notre approche slow fashion privilégie la qualité à la quantité, l'intemporalité aux tendances
                éphémères, et l'éthique à la production de masse.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-[#C6A76D] flex items-center justify-center mr-4">
                    <Tag className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800">Matériaux nobles</h3>
                    <p className="text-stone-600 text-sm">Sélectionnés pour leur qualité et leur durabilité</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-[#C6A76D] flex items-center justify-center mr-4">
                    <Tag className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800">Production éthique</h3>
                    <p className="text-stone-600 text-sm">Respect des conditions de travail et juste rémunération</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-[#C6A76D] flex items-center justify-center mr-4">
                    <Tag className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800">Design intemporel</h3>
                    <p className="text-stone-600 text-sm">Des pièces qui traversent les saisons et les années</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border-l-4 border-[#C6A76D]">
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6 text-stone-800">Informations pratiques</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-[#C6A76D] mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-stone-800 mb-1">Horaires d'ouverture</h3>
                  <p className="text-stone-600">
                    Lundi - Vendredi : 10h - 19h
                    <br />
                    Samedi : 10h - 20h
                    <br />
                    Dimanche : Fermé
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <ShoppingBag className="h-6 w-6 text-[#C6A76D] mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-stone-800 mb-1">Shopping privé</h3>
                  <p className="text-stone-600">
                    Possibilité de réserver un créneau pour un shopping privé avec conseils personnalisés.
                    <br />
                    Sur rendez-vous uniquement.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                className="border-[#C6A76D] text-[#C6A76D] hover:bg-[#C6A76D] hover:text-white rounded-none"
              >
                <Link href="/reservation#booking-calendar">
                  Réserver un shopping privé <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <ReservationCta />
    </main>
  )
}
