import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, MapPin, Instagram, Phone } from "lucide-react"
import UniverseCard from "@/components/universe-card"
import ReservationCta from "@/components/reservation-cta"
import VideoHero from "@/components/video-hero"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <VideoHero />

      {/* Introduction */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-stone-800">
            Un lieu unique pour créer, se retrouver et s'inspirer
          </h2>
          <p className="text-stone-600 mb-8 leading-relaxed">
            Dream Studio by LAYONN Style est un espace premium au cœur de Montpellier, alliant charme authentique et
            modernité pour tous vos projets créatifs.
          </p>
          <Button asChild className="">
            <Link href="/reservation">
              Réserver une session privative <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Les 5 Univers */}
      <section className="bg-[#F5F5F0] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center text-stone-800">
            Les 5 univers du Studio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <UniverseCard
              icon="☕"
              title="Le Dream Café"
              description="Un coffee shop girly et cosy, parfait pour se retrouver, brainstormer, créer ou simplement savourer un moment."
              color="#FAD5E5"
              image="/cafe.jpg?height=400&width=600"
              href="/dream-cafe"
            />

            <UniverseCard
              icon="🌂"
              title="Boutique LAYONN"
              description="Un corner store élégant mettant en lumière la marque de mode haut de gamme Layonn et ses collections slow fashion."
              color="#E6DED3"
              image="/boutique.jpg?height=400&width=600"
              href="https://layonnstyle.com/"
              target="_blank"
              rel="noopener noreferrer"
            />

            <UniverseCard
              icon="📸"
              title="Studio photo"
              description="Un espace lumineux adapté aux shootings pro, portraits, packshots ou création de contenu social media."
              color="#F5F5F0"
              image="/photo.jpg"
              href="/studio-photo"
            />

            <UniverseCard
              icon="🎧"
              title="Studios podcast & Live Stream"
              description="Un studio podcast premium, sonorisé et esthétique, équipé pour les formats longs, interviews, capsules ou lives."
              color="#B6B6B6"
              image="/podcast.jpg"
              href="/studio-podcast"
            />

            <UniverseCard
              icon="🏫"
              title="Lieux de réception & formation"
              description="Un espace chaleureux, totalement privatisable pour vos afterworks, lancements de produits, formations et ateliers."
              color="#C6A76D"
              image="/reception.jpg"
              href="/evenements"
            />
          </div>
        </div>
      </section>

      {/* Dream Café Highlight */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] w-full">
              <Image
                src="/cafe.jpg"
                alt="Dream Café"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <span className="text-4xl mb-4 block">☕</span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-stone-800">Le Dream Café</h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Un coffee shop girly et cosy, parfait pour se retrouver, brainstormer, créer ou simplement savourer un
                moment. Chai latte, espresso, citronnades maison, ambiance rose poudré et décoration instagramable.
              </p>
              <div className="bg-[#FAD5E5] bg-opacity-20 p-6 rounded-lg">
                <h3 className="font-serif text-xl mb-4 text-stone-800">Découvrez notre carte</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• Chai latte signature</li>
                  <li>• Espresso premium</li>
                  <li>• Citronnades maison</li>
                  <li>• Pâtisseries artisanales</li>
                </ul>
              </div>
              <Button
                variant="outline"
                className="mt-8 border-[#F89CCF] text-[#F89CCF] hover:bg-[#F89CCF] hover:text-white rounded-none"
                asChild
              >
                <Link href="/dream_cafe">
                  Découvrir le Dream Café <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Photo Highlight */}
      <section className="bg-[#F5F5F0] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-4xl mb-4 block">📸</span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-stone-800">
                Studio photo professionnel
              </h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Un espace lumineux, à l'étage et au sous-sol, adapté aux shootings pro, portraits, packshots ou création
                de contenu social media. Équipé en lumière naturelle et artificielle, fonds multiples, zones modulables.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-serif text-xl mb-4 text-stone-800">Équipements disponibles</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• Lumière naturelle zénithale</li>
                  <li>• Fonds multiples (blanc, noir, colorés)</li>
                  <li>• Éclairages professionnels</li>
                  <li>• Zones modulables</li>
                </ul>
              </div>
              <Button
                variant="outline"
                className="mt-8 border-[#C6A76D] text-[#C6A76D] bg-white hover:bg-[#C6A76D] hover:text-white rounded-none"
                asChild
              >
                <Link href="/studio-photo">
                  Découvrir le Studio Photo <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[500px] w-full order-1 md:order-2">
              <Image
                src="/podcast2.jpg?height=500&width=600"
                alt="Studio Photo"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <ReservationCta />

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-stone-800">Contactez-nous</h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Vous avez des questions ou souhaitez en savoir plus sur nos services ? N'hésitez pas à nous contacter.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-[#C6A76D] mr-4" />
                  <div>
                    <h3 className="font-medium text-stone-800">Adresse</h3>
                    <p className="text-stone-600">11 rue Alexandre Cabanel, 34000 Montpellier</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-[#C6A76D] mr-4" />
                  <div>
                    <h3 className="font-medium text-stone-800">Téléphone</h3>
                    <p className="text-stone-600">+33 6 12 34 56 78</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Instagram className="h-6 w-6 text-[#C6A76D] mr-4" />
                  <div>
                    <h3 className="font-medium text-stone-800">Instagram</h3>
                    <p className="text-stone-600">@dreamstudio_layonn</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F5F0] p-8 rounded-lg">
              <h3 className="font-serif text-2xl mb-6 text-stone-800">Envoyez-nous un message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-600 mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C6A76D]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-600 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C6A76D]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-600 mb-1">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C6A76D]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-600 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C6A76D]"
                  ></textarea>
                </div>
                <Button className="mt-8 border-[#C6A76D] text-[#C6A76D] bg-white hover:bg-[#C6A76D] hover:text-white rounded-none">Envoyer</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
