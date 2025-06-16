import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Coffee, Cake, Clock, Users, ChevronRight } from "lucide-react"
import ReservationCta from "@/components/reservation-cta"

export default function DreamCafePage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FAD5E5] to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-5xl mb-4 block">☕</span>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-stone-800">Le Dream Café</h1>
              <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                Un coffee shop girly et cosy, parfait pour se retrouver, brainstormer, créer ou simplement savourer un
                moment. Chai latte, espresso, citronnades maison, ambiance rose poudré et décoration instagramable.
              </p>
              <Button asChild className="bg-[#F89CCF] hover:bg-[#e77db8] text-white rounded-none px-8 py-6">
                <Link href="/reservation#booking-calendar">
                  <Calendar className="mr-2 h-5 w-5" /> Réserver une table
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=500&width=600" alt="Dream Café" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center text-stone-800">Notre carte</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Boissons */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#F89CCF]">
              <div className="flex items-center mb-6">
                <Coffee className="h-8 w-8 text-[#F89CCF] mr-4" />
                <h3 className="font-serif text-2xl text-stone-800">Boissons</h3>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-dashed border-stone-200 pb-2">
                  <div>
                    <h4 className="font-medium text-stone-800">Chai Latte Signature</h4>
                    <p className="text-stone-600 text-sm">Épicé et réconfortant, avec une touche de miel</p>
                  </div>
                  <span className="text-[#F89CCF] font-medium">5,50 €</span>
                </div>

                <div className="flex justify-between items-center border-b border-dashed border-stone-200 pb-2">
                  <div>
                    <h4 className="font-medium text-stone-800">Espresso Premium</h4>
                    <p className="text-stone-600 text-sm">Café de spécialité, torréfaction artisanale</p>
                  </div>
                  <span className="text-[#F89CCF] font-medium">3,20 €</span>
                </div>

                <div className="flex justify-between items-center border-b border-dashed border-stone-200 pb-2">
                  <div>
                    <h4 className="font-medium text-stone-800">Citronnade Maison</h4>
                    <p className="text-stone-600 text-sm">Fraîche et légèrement sucrée, parfumée à la menthe</p>
                  </div>
                  <span className="text-[#F89CCF] font-medium">4,50 €</span>
                </div>

                <div className="flex justify-between items-center border-b border-dashed border-stone-200 pb-2">
                  <div>
                    <h4 className="font-medium text-stone-800">Matcha Latte</h4>
                    <p className="text-stone-600 text-sm">Thé matcha japonais, lait d'amande</p>
                  </div>
                  <span className="text-[#F89CCF] font-medium">5,80 €</span>
                </div>
              </div>
            </div>

            {/* Pâtisseries */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#F89CCF]">
              <div className="flex items-center mb-6">
                <Cake className="h-8 w-8 text-[#F89CCF] mr-4" />
                <h3 className="font-serif text-2xl text-stone-800">Pâtisseries</h3>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-dashed border-stone-200 pb-2">
                  <div>
                    <h4 className="font-medium text-stone-800">Cookie Artisanal</h4>
                    <p className="text-stone-600 text-sm">Chocolat noir et fleur de sel</p>
                  </div>
                  <span className="text-[#F89CCF] font-medium">3,80 €</span>
                </div>

                <div className="flex justify-between items-center border-b border-dashed border-stone-200 pb-2">
                  <div>
                    <h4 className="font-medium text-stone-800">Cheesecake Framboise</h4>
                    <p className="text-stone-600 text-sm">Onctueux et légèrement acidulé</p>
                  </div>
                  <span className="text-[#F89CCF] font-medium">5,50 €</span>
                </div>

                <div className="flex justify-between items-center border-b border-dashed border-stone-200 pb-2">
                  <div>
                    <h4 className="font-medium text-stone-800">Carrot Cake</h4>
                    <p className="text-stone-600 text-sm">Épicé avec glaçage au cream cheese</p>
                  </div>
                  <span className="text-[#F89CCF] font-medium">5,20 €</span>
                </div>

                <div className="flex justify-between items-center border-b border-dashed border-stone-200 pb-2">
                  <div>
                    <h4 className="font-medium text-stone-800">Muffin Myrtille</h4>
                    <p className="text-stone-600 text-sm">Moelleux et généreux en fruits</p>
                  </div>
                  <span className="text-[#F89CCF] font-medium">4,20 €</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiance Section */}
      <section className="bg-[#FAD5E5] bg-opacity-20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center text-stone-800">
            Une ambiance unique
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-48 bg-[#FAD5E5] bg-opacity-30 rounded-lg flex items-center justify-center mb-6">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Espace cosy"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <h3 className="font-serif text-xl mb-3 text-stone-800">Espace cosy</h3>
              <p className="text-stone-600">
                Des fauteuils confortables, une décoration soignée et une ambiance chaleureuse pour vous sentir comme à
                la maison.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-48 bg-[#FAD5E5] bg-opacity-30 rounded-lg flex items-center justify-center mb-6">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Coin travail"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <h3 className="font-serif text-xl mb-3 text-stone-800">Coin travail</h3>
              <p className="text-stone-600">
                Des espaces dédiés au travail avec prises électriques, Wi-Fi haut débit et une ambiance propice à la
                concentration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-48 bg-[#FAD5E5] bg-opacity-30 rounded-lg flex items-center justify-center mb-6">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Terrasse"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <h3 className="font-serif text-xl mb-3 text-stone-800">Terrasse</h3>
              <p className="text-stone-600">
                Une terrasse ensoleillée pour profiter des beaux jours, avec une vue imprenable sur le centre historique
                de Montpellier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border-l-4 border-[#F89CCF]">
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6 text-stone-800">Informations pratiques</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-[#F89CCF] mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-stone-800 mb-1">Horaires d'ouverture</h3>
                  <p className="text-stone-600">
                    Lundi - Vendredi : 8h - 19h
                    <br />
                    Samedi : 9h - 20h
                    <br />
                    Dimanche : 10h - 18h
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="h-6 w-6 text-[#F89CCF] mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-stone-800 mb-1">Réservations</h3>
                  <p className="text-stone-600">
                    Réservation recommandée pour les groupes de plus de 4 personnes.
                    <br />
                    Possibilité de privatiser l'espace pour vos événements.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                className="border-[#F89CCF] text-[#F89CCF] hover:bg-[#F89CCF] hover:text-white rounded-none"
              >
                <Link href="/reservation#booking-calendar">
                  Réserver une table <ChevronRight className="ml-2 h-4 w-4" />
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
