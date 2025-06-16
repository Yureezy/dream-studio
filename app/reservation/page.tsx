"use client"

import { Button } from "@/components/ui/button"
import { Clock, Users } from "lucide-react"
import SumUpBookingEmbed from "@/components/sumup-booking-embed"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function ReservationPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#F5F5F0] py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-stone-800">
            Réservez votre session privative
          </h1>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Choisissez l'espace qui correspond à vos besoins et réservez votre créneau 100% privatif en quelques clics.
          </p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Studio Photo */}
            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-stone-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">📸</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-2 text-stone-800">Studio Photo</h3>
                <p className="text-stone-600 mb-4">
                  Espace lumineux adapté aux shootings professionnels, portraits, packshots ou création de contenu
                  social media.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-stone-600">
                    <Clock className="h-4 w-4 mr-2 text-[#C6A76D]" />
                    <span>Réservation par créneaux de 2h, 4h ou journée</span>
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Users className="h-4 w-4 mr-2 text-[#C6A76D]" />
                    <span>Jusqu'à 8 personnes</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-[#C6A76D] hover:bg-[#D4AF37] text-white rounded-none"
                  onClick={() => {
                    const element = document.getElementById("booking-calendar")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Réserver le studio photo
                </Button>
              </div>
            </div>

            {/* Studio Podcast */}
            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-stone-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">🎧</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-2 text-stone-800">Studio Podcast</h3>
                <p className="text-stone-600 mb-4">
                  Studio podcast premium, sonorisé et esthétique, équipé pour les formats longs, interviews, capsules ou
                  lives.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-stone-600">
                    <Clock className="h-4 w-4 mr-2 text-[#C6A76D]" />
                    <span>Réservation par créneaux de 1h, 2h ou 4h</span>
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Users className="h-4 w-4 mr-2 text-[#C6A76D]" />
                    <span>Jusqu'à 4 personnes</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-[#C6A76D] hover:bg-[#D4AF37] text-white rounded-none"
                  onClick={() => {
                    const element = document.getElementById("booking-calendar")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Réserver le studio podcast
                </Button>
              </div>
            </div>

            {/* Espace Événement */}
            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-stone-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">🏫</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-2 text-stone-800">Espace Événement</h3>
                <p className="text-stone-600 mb-4">
                  Espace chaleureux, totalement privatisable pour vos afterworks, lancements de produits, formations et
                  ateliers.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-stone-600">
                    <Clock className="h-4 w-4 mr-2 text-[#C6A76D]" />
                    <span>Réservation par demi-journée ou journée</span>
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Users className="h-4 w-4 mr-2 text-[#C6A76D]" />
                    <span>Jusqu'à 20 personnes</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-[#C6A76D] hover:bg-[#D4AF37] text-white rounded-none"
                  onClick={() => {
                    const element = document.getElementById("booking-calendar")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Réserver l'espace événement
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SumUpBooking Integration */}
      <section className="py-16 bg-[#F5F5F0]" id="booking-calendar">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-center mb-8 text-stone-800">Réservez votre créneau</h2>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <SumUpBookingEmbed height={800} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-center mb-12 text-stone-800">Questions fréquentes</h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl md:text-2xl font-bold text-stone-800">
                  Comment fonctionne la réservation ?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-xl text-stone-700">
                  Choisissez l'espace que vous souhaitez réserver, sélectionnez un créneau disponible dans notre
                  calendrier, puis confirmez votre réservation en effectuant le paiement en ligne via SumUpBooking.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl md:text-2xl font-bold text-stone-800">
                  Quels équipements sont inclus ?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-xl text-stone-700">
                  Chaque espace dispose d'équipements spécifiques. Le studio photo inclut des fonds et éclairages, le
                  studio podcast comprend des micros et une table de mixage, et l'espace événement dispose de tables,
                  chaises et équipement audiovisuel.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl md:text-2xl font-bold text-stone-800">
                  Quelle est la politique d'annulation ?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-xl text-stone-700">
                  Les annulations effectuées plus de 48h avant le créneau réservé sont remboursées à 100%. Pour les
                  annulations entre 24h et 48h, un remboursement de 50% est accordé. Aucun remboursement n'est possible
                  pour les annulations à moins de 24h.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl md:text-2xl font-bold text-stone-800">
                  Puis-je privatiser l'ensemble du lieu ?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-xl text-stone-700">
                  Oui, il est possible de privatiser l'intégralité du Dream Studio pour des événements spéciaux.
                  Contactez-nous directement pour discuter de vos besoins et obtenir un devis personnalisé.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  )
}
