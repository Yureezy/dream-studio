import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Clock, CheckCircle, ChevronRight } from "lucide-react"
import ReservationCta from "@/components/reservation-cta"

export default function EvenementsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#C6A76D]/30 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-5xl mb-4 block">🏫</span>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-stone-800">
                Lieux de réception & formation
              </h1>
              <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                Un espace chaleureux, totalement privatisable pour vos afterworks professionnels, lancements de
                produits, relations presse, formations, ateliers et masterclass.
              </p>
              <Button asChild className="bg-[#C6A76D] hover:bg-[#b89355] text-white rounded-none px-8 py-6">
                <Link href="https://booking.sumup.com/b/CR7X3R">
                  <Calendar className="mr-2 h-5 w-5" /> Réserver l'espace
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Espace événements"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types d'événements */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center text-stone-800">
            Types d'événements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#C6A76D]">
              <h3 className="font-serif text-xl mb-4 text-stone-800">Afterworks professionnels</h3>
              <p className="text-stone-600 mb-6">
                Un cadre élégant et convivial pour vos événements d'entreprise, networking et rencontres
                professionnelles.
              </p>
              <div className="flex items-center text-sm text-stone-600">
                <Users className="h-4 w-4 mr-2 text-[#C6A76D]" />
                <span>Jusqu'à 30 personnes</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#C6A76D]">
              <h3 className="font-serif text-xl mb-4 text-stone-800">Lancements de produits</h3>
              <p className="text-stone-600 mb-6">
                Un espace modulable et photogénique pour présenter vos nouveaux produits et services à la presse et aux
                influenceurs.
              </p>
              <div className="flex items-center text-sm text-stone-600">
                <Users className="h-4 w-4 mr-2 text-[#C6A76D]" />
                <span>Jusqu'à 25 personnes</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#C6A76D]">
              <h3 className="font-serif text-xl mb-4 text-stone-800">Formations & Masterclass</h3>
              <p className="text-stone-600 mb-6">
                Un cadre inspirant pour vos formations, ateliers et masterclass, équipé de tout le nécessaire
                pédagogique.
              </p>
              <div className="flex items-center text-sm text-stone-600">
                <Users className="h-4 w-4 mr-2 text-[#C6A76D]" />
                <span>Jusqu'à 20 personnes</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#C6A76D]">
              <h3 className="font-serif text-xl mb-4 text-stone-800">Shootings de marque</h3>
              <p className="text-stone-600 mb-6">
                Un lieu polyvalent pour vos shootings photo et vidéo de marque, avec différents décors et ambiances.
              </p>
              <div className="flex items-center text-sm text-stone-600">
                <Users className="h-4 w-4 mr-2 text-[#C6A76D]" />
                <span>Équipe technique sur demande</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#C6A76D]">
              <h3 className="font-serif text-xl mb-4 text-stone-800">Ateliers créatifs</h3>
              <p className="text-stone-600 mb-6">
                Un espace inspirant pour vos ateliers créatifs, team buildings et sessions de brainstorming.
              </p>
              <div className="flex items-center text-sm text-stone-600">
                <Users className="h-4 w-4 mr-2 text-[#C6A76D]" />
                <span>Jusqu'à 15 personnes</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#C6A76D]">
              <h3 className="font-serif text-xl mb-4 text-stone-800">Événements privés</h3>
              <p className="text-stone-600 mb-6">
                Un lieu unique pour vos événements privés, célébrations et moments spéciaux entre amis ou en famille.
              </p>
              <div className="flex items-center text-sm text-stone-600">
                <Users className="h-4 w-4 mr-2 text-[#C6A76D]" />
                <span>Jusqu'à 30 personnes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Espaces disponibles */}
      <section className="bg-[#C6A76D]/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center text-stone-800">
            Espaces disponibles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Espace principal"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-3 text-stone-800">Espace principal</h3>
              <p className="text-stone-600 mb-4">
                100m² modulables avec pierre apparente, hauteur sous plafond de 4m, parfait pour les réceptions et
                événements.
              </p>
              <div className="flex items-center text-sm text-stone-600 mb-2">
                <Users className="h-4 w-4 mr-2 text-[#C6A76D]" />
                <span>Jusqu'à 30 personnes</span>
              </div>
              <div className="flex items-center text-sm text-stone-600">
                <CheckCircle className="h-4 w-4 mr-2 text-[#C6A76D]" />
                <span>Équipement audiovisuel inclus</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Salle de formation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-3 text-stone-800">Salle de formation</h3>
              <p className="text-stone-600 mb-4">
                50m² dédiés aux formations et ateliers, avec mobilier modulable et équipement pédagogique.
              </p>
              <div className="flex items-center text-sm text-stone-600 mb-2">
                <Users className="h-4 w-4 mr-2 text-[#C6A76D]" />
                <span>Jusqu'à 20 personnes</span>
              </div>
              <div className="flex items-center text-sm text-stone-600">
                <CheckCircle className="h-4 w-4 mr-2 text-[#C6A76D]" />
                <span>Vidéoprojecteur et tableau blanc</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center text-stone-800">Tarifs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#C6A76D]/30 hover:border-[#C6A76D] transition-colors">
              <div className="text-center mb-6">
                <h3 className="font-serif text-xl mb-2 text-stone-800">Demi-journée</h3>
                <div className="text-3xl font-bold text-[#C6A76D]">350€</div>
                <p className="text-stone-600 text-sm">4 heures</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Accès à l'espace principal</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Équipement audiovisuel</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Eau et café inclus</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#C6A76D] hover:bg-[#b89355] text-white rounded-none">
                <Link href="https://booking.sumup.com/b/CR7X3R">Réserver</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#C6A76D] transform md:-translate-y-4">
              <div className="text-center mb-6">
                <div className="bg-[#C6A76D] text-white text-xs font-bold uppercase py-1 px-2 rounded-full inline-block mb-2">
                  Populaire
                </div>
                <h3 className="font-serif text-xl mb-2 text-stone-800">Journée complète</h3>
                <div className="text-3xl font-bold text-[#C6A76D]">600€</div>
                <p className="text-stone-600 text-sm">8 heures</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Accès à l'espace principal</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Équipement audiovisuel</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Eau, café et collations</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Accès au Dream Café</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#C6A76D] hover:bg-[#b89355] text-white rounded-none">
                <Link href="https://booking.sumup.com/b/CR7X3R">Réserver</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-[#C6A76D]/30 hover:border-[#C6A76D] transition-colors">
              <div className="text-center mb-6">
                <h3 className="font-serif text-xl mb-2 text-stone-800">Privatisation complète</h3>
                <div className="text-3xl font-bold text-[#C6A76D]">1200€</div>
                <p className="text-stone-600 text-sm">Journée entière</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Privatisation totale du lieu</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Accès à tous les espaces</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Service traiteur possible</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Coordination événementielle</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#C6A76D] hover:bg-[#b89355] text-white rounded-none">
                <Link href="https://booking.sumup.com/b/CR7X3R">Réserver</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services additionnels */}
      <section className="bg-[#C6A76D]/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center text-stone-800">
            Services additionnels
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl mb-4 text-stone-800">Service traiteur</h3>
              <p className="text-stone-600 mb-4">
                Cocktails, buffets, plateaux-repas ou service à table, nous travaillons avec des traiteurs sélectionnés
                pour leur qualité.
              </p>
              <p className="text-[#C6A76D] font-medium">Sur devis</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl mb-4 text-stone-800">Captation vidéo</h3>
              <p className="text-stone-600 mb-4">
                Enregistrement professionnel de votre événement, conférence ou formation avec montage et livraison des
                fichiers.
              </p>
              <p className="text-[#C6A76D] font-medium">À partir de 350€</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl mb-4 text-stone-800">Coordination événementielle</h3>
              <p className="text-stone-600 mb-4">
                Un coordinateur dédié pour vous accompagner dans l'organisation et le bon déroulement de votre
                événement.
              </p>
              <p className="text-[#C6A76D] font-medium">À partir de 250€</p>
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
                  <h3 className="font-medium text-stone-800 mb-1">Horaires de réservation</h3>
                  <p className="text-stone-600">
                    Lundi - Samedi : 8h - 23h
                    <br />
                    Dimanche : Sur demande
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="h-6 w-6 text-[#C6A76D] mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-stone-800 mb-1">Capacité</h3>
                  <p className="text-stone-600">
                    Jusqu'à 30 personnes en format cocktail
                    <br />
                    Jusqu'à 20 personnes en format conférence/formation
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
                <Link href="https://booking.sumup.com/b/CR7X3R">
                  Réserver l'espace <ChevronRight className="ml-2 h-4 w-4" />
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
