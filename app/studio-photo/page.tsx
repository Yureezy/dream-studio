import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Camera, Clock, Users, CheckCircle, ChevronRight } from "lucide-react"
import ReservationCta from "@/components/reservation-cta"

export default function StudioPhotoPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F0] to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-5xl mb-4 block">📸</span>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-stone-800">
                Studio photo professionnel
              </h1>

              {/* Ajout des infos clés */}
              <div className="bg-[#F5F5F0] bg-opacity-60 rounded-lg p-6 mb-6 shadow flex flex-col gap-3">
                <h3 className="font-serif text-xl text-[#C6A76D] mb-2">Idéal si tu es...</h3>
                <ul className="list-disc pl-5 text-stone-700 space-y-1 text-base">
                  <li>Photographe ou vidéaste en quête d’un studio équipé et flexible</li>
                  <li>Modèle, influenceur ou marque voulant réaliser un shooting pro</li>
                  <li>Créateur de contenu avec besoin de fonds variés, lumières, réflecteurs</li>
                  <li>En recherche d’un espace pour tes lookbooks, campagnes ou portraits</li>
                  <li className="mt-2 font-semibold text-[#C6A76D]">| Tout est là pour créer un visuel impactant et professionnel, à ton image.</li>
                </ul>
              </div>
              <Button asChild className="border-[#C6A76D] text-[#C6A76D] bg-white hover:text-white rounded-none px-8 py-6">
                <Link href="https://booksy.com/fr-fr/s/478780/widget?pid=widget&appointmentTypes%5B%5D=877799">
                  <Camera className="mr-2 h-5 w-5" /> Réserver le studio
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=500&width=600" alt="Studio Photo" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center text-stone-800">
            Équipements disponibles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl mb-6 text-stone-800">Éclairage</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#C6A76D] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Lumière naturelle zénithale</h4>
                    <p className="text-stone-600 text-sm">Grande verrière offrant une lumière douce et diffuse</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#C6A76D] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Flash de studio Profoto</h4>
                    <p className="text-stone-600 text-sm">2 têtes flash avec boîtes à lumière et parapluies</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#C6A76D] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Éclairage continu LED</h4>
                    <p className="text-stone-600 text-sm">Panneaux LED réglables en température et intensité</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#C6A76D] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Réflecteurs et diffuseurs</h4>
                    <p className="text-stone-600 text-sm">Ensemble complet pour moduler la lumière</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl mb-6 text-stone-800">Fonds et accessoires</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#C6A76D] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Fonds multiples</h4>
                    <p className="text-stone-600 text-sm">Blanc, noir, gris, colorés et papiers spéciaux</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#C6A76D] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Supports de fond</h4>
                    <p className="text-stone-600 text-sm">Système professionnel réglable en hauteur</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#C6A76D] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Table de packshot</h4>
                    <p className="text-stone-600 text-sm">Pour la photographie de produits et nature morte</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#C6A76D] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Accessoires de styling</h4>
                    <p className="text-stone-600 text-sm">Portants, miroirs, tables et chaises</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Spaces */}
      <section className="bg-[#F5F5F0] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center text-stone-800">Nos espaces</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Studio principal"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-3 text-stone-800">Studio principal</h3>
              <p className="text-stone-600 mb-4">
                80m² avec verrière, hauteur sous plafond de 4m, parfait pour les shootings mode, portraits et groupes.
              </p>
              <div className="flex items-center text-sm text-stone-600">
                <Users className="h-4 w-4 mr-2 text-[#C6A76D]" />
                <span>Jusqu'à 8 personnes</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Studio packshot"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-3 text-stone-800">Studio packshot</h3>
              <p className="text-stone-600 mb-4">
                40m² dédié à la photographie de produits, avec table de packshot et éclairage spécifique.
              </p>
              <div className="flex items-center text-sm text-stone-600">
                <Users className="h-4 w-4 mr-2 text-[#C6A76D]" />
                <span>Jusqu'à 3 personnes</span>
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
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#F5F5F0] hover:border-[#C6A76D] transition-colors">
              <div className="text-center mb-6">
                <h3 className="font-serif text-xl mb-2 text-stone-800">Demi-journée</h3>
                <div className="text-3xl font-bold text-[#C6A76D]">150€</div>
                <p className="text-stone-600 text-sm">4 heures</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Accès au studio principal</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Équipement d'éclairage de base</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>1 fond au choix</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#C6A76D] hover:bg-[#b89355] text-white rounded-none">
                <Link href="https://booksy.com/fr-fr/s/478780/widget?pid=widget&appointmentTypes%5B%5D=877799">
                  Réserver
                </Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#C6A76D] transform md:-translate-y-4">
              <div className="text-center mb-6">
                <div className="bg-[#C6A76D] text-white text-xs font-bold uppercase py-1 px-2 rounded-full inline-block mb-2">
                  Populaire
                </div>
                <h3 className="font-serif text-xl mb-2 text-stone-800">Journée complète</h3>
                <div className="text-3xl font-bold text-[#C6A76D]">280€</div>
                <p className="text-stone-600 text-sm">8 heures</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Accès au studio principal</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Équipement d'éclairage complet</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Fonds multiples</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Accès à l'espace détente</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#C6A76D] hover:bg-[#b89355] text-white rounded-none">
                <Link href="https://booksy.com/fr-fr/s/478780/widget?pid=widget&appointmentTypes%5B%5D=877799">
                  Réserver
                </Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-[#F5F5F0] hover:border-[#C6A76D] transition-colors">
              <div className="text-center mb-6">
                <h3 className="font-serif text-xl mb-2 text-stone-800">Forfait packshot</h3>
                <div className="text-3xl font-bold text-[#C6A76D]">200€</div>
                <p className="text-stone-600 text-sm">4 heures</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Accès au studio packshot</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Éclairage spécifique produits</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Table de packshot</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Accessoires de styling</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#C6A76D] hover:bg-[#b89355] text-white rounded-none">
                <Link href="https://booksy.com/fr-fr/s/478780/widget?pid=widget&appointmentTypes%5B%5D=877799">
                  Réserver
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="bg-[#F5F5F0] bg-opacity-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6 text-stone-800">Informations pratiques</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-[#C6A76D] mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-stone-800 mb-1">Horaires de réservation</h3>
                  <p className="text-stone-600">
                    Lundi - Samedi : 8h - 20h
                    <br />
                    Dimanche : Sur demande
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="h-6 w-6 text-[#C6A76D] mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-stone-800 mb-1">Équipe technique</h3>
                  <p className="text-stone-600">
                    Possibilité de réserver un assistant technique ou un photographe professionnel en supplément.
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
                <Link href="https://booksy.com/fr-fr/s/478780/widget?pid=widget&appointmentTypes%5B%5D=877799">
                  Réserver le studio <ChevronRight className="ml-2 h-4 w-4" />
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
