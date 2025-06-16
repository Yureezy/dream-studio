import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mic, Headphones, Clock, Users, CheckCircle, ChevronRight, Camera } from "lucide-react"
import ReservationCta from "@/components/reservation-cta"

export default function StudioPodcastPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#B6B6B6] to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-5xl mb-4 block">🎧</span>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-stone-800">
                Studios podcast & Live Stream
              </h1>
              <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                Un studio podcast premium, sonorisé et esthétique, équipé pour les formats longs, interviews, capsules
                ou lives. Possibilité de montage, régie technique, tournage en multicaméra.
              </p>
              <Button asChild className="bg-[#C6A76D] hover:bg-[#b89355] text-white rounded-none px-8 py-6">
                <Link href="https://booking.sumup.com/b/K3482V">
                  <Mic className="mr-2 h-5 w-5" /> Réserver le studio
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=500&width=600" alt="Studio Podcast" fill className="object-cover" />
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
              <h3 className="font-serif text-2xl mb-6 text-stone-800">Audio</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#C6A76D] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Microphones professionnels</h4>
                    <p className="text-stone-600 text-sm">Shure SM7B, Rode Podcaster, Neumann U87</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#C6A76D] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Table de mixage</h4>
                    <p className="text-stone-600 text-sm">RØDECaster Pro, interface audio multicanal</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#C6A76D] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Casques monitoring</h4>
                    <p className="text-stone-600 text-sm">Beyerdynamic DT 770 Pro, Audio-Technica ATH-M50x</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#C6A76D] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Traitement acoustique</h4>
                    <p className="text-stone-600 text-sm">Studio insonorisé avec panneaux acoustiques</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl mb-6 text-stone-800">Vidéo & Streaming</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#C6A76D] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Caméras 4K</h4>
                    <p className="text-stone-600 text-sm">Sony Alpha, Blackmagic Pocket Cinema</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#C6A76D] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Éclairage vidéo</h4>
                    <p className="text-stone-600 text-sm">Panneaux LED avec température réglable</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#C6A76D] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Mélangeur vidéo</h4>
                    <p className="text-stone-600 text-sm">ATEM Mini Pro pour streaming multicaméra</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#C6A76D] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Fond personnalisable</h4>
                    <p className="text-stone-600 text-sm">Fond vert et décors modulables</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Spaces */}
      <section className="bg-[#B6B6B6] bg-opacity-20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center text-stone-800">Nos espaces</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Studio podcast principal"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-3 text-stone-800">Studio podcast principal</h3>
              <p className="text-stone-600 mb-4">
                40m² avec traitement acoustique premium, parfait pour les interviews et discussions de groupe.
              </p>
              <div className="flex items-center text-sm text-stone-600">
                <Users className="h-4 w-4 mr-2 text-[#C6A76D]" />
                <span>Jusqu'à 4 personnes</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Studio live stream"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-3 text-stone-800">Studio live stream</h3>
              <p className="text-stone-600 mb-4">
                30m² équipé pour le streaming en direct, avec régie technique et décors personnalisables.
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
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#B6B6B6] hover:border-[#C6A76D] transition-colors">
              <div className="text-center mb-6">
                <h3 className="font-serif text-xl mb-2 text-stone-800">Format court</h3>
                <div className="text-3xl font-bold text-[#C6A76D]">90€</div>
                <p className="text-stone-600 text-sm">2 heures</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Studio podcast principal</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Jusqu'à 2 microphones</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Enregistrement audio</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#C6A76D] hover:bg-[#b89355] text-white rounded-none">
                <Link href="https://booking.sumup.com/b/K3482V">Réserver</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#C6A76D] transform md:-translate-y-4">
              <div className="text-center mb-6">
                <div className="bg-[#C6A76D] text-white text-xs font-bold uppercase py-1 px-2 rounded-full inline-block mb-2">
                  Populaire
                </div>
                <h3 className="font-serif text-xl mb-2 text-stone-800">Format standard</h3>
                <div className="text-3xl font-bold text-[#C6A76D]">160€</div>
                <p className="text-stone-600 text-sm">4 heures</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Studio podcast principal</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Jusqu'à 4 microphones</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Enregistrement audio</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Montage audio basique</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#C6A76D] hover:bg-[#b89355] text-white rounded-none">
                <Link href="https://booking.sumup.com/b/K3482V">Réserver</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-[#B6B6B6] hover:border-[#C6A76D] transition-colors">
              <div className="text-center mb-6">
                <h3 className="font-serif text-xl mb-2 text-stone-800">Live Stream</h3>
                <div className="text-3xl font-bold text-[#C6A76D]">250€</div>
                <p className="text-stone-600 text-sm">4 heures</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Studio live stream</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Multicaméra 4K</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Régie technique</span>
                </li>
                <li className="flex items-center text-stone-600">
                  <CheckCircle className="h-4 w-4 text-[#C6A76D] mr-2" />
                  <span>Technicien inclus</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#C6A76D] hover:bg-[#b89355] text-white rounded-none">
                <Link href="https://booking.sumup.com/b/K3482V">Réserver</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services additionnels */}
      <section className="bg-[#B6B6B6] bg-opacity-20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center text-stone-800">
            Services additionnels
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-[#C6A76D] flex items-center justify-center mr-4">
                  <Headphones className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-serif text-xl text-stone-800">Montage audio</h3>
              </div>
              <p className="text-stone-600 mb-4">
                Montage professionnel de votre podcast avec nettoyage audio, mixage et mastering.
              </p>
              <p className="text-[#C6A76D] font-medium">À partir de 80€</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-[#C6A76D] flex items-center justify-center mr-4">
                  <Mic className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-serif text-xl text-stone-800">Technicien son</h3>
              </div>
              <p className="text-stone-600 mb-4">
                Un technicien expérimenté pour gérer l'enregistrement et optimiser la qualité sonore.
              </p>
              <p className="text-[#C6A76D] font-medium">50€/heure</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-[#C6A76D] flex items-center justify-center mr-4">
                  <Camera className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-serif text-xl text-stone-800">Montage vidéo</h3>
              </div>
              <p className="text-stone-600 mb-4">
                Montage vidéo professionnel avec habillage, transitions et exports pour différentes plateformes.
              </p>
              <p className="text-[#C6A76D] font-medium">À partir de 120€</p>
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
                    Lundi - Samedi : 8h - 22h
                    <br />
                    Dimanche : Sur demande
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="h-6 w-6 text-[#C6A76D] mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-stone-800 mb-1">Accompagnement</h3>
                  <p className="text-stone-600">
                    Possibilité de bénéficier d'un accompagnement personnalisé pour votre projet podcast ou streaming.
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
                <Link href="https://booking.sumup.com/b/K3482V">
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
