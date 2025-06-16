import Image from "next/image"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Users, Globe, Lightbulb, CheckCircle, ChevronDown } from "lucide-react"

export default function AProposPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
<section className="relative py-16 md:py-24">
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/about.jpg"
            alt="Dream Studio"
            fill
            className="object-cover object-center opacity-40"
            priority
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#F5F5F0]/60"></div>
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-stone-800">
            À propos de Dream Studio
          </h1>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto text-lg">
            Dream Studio est un espace créatif premium situé au cœur de Montpellier, pensé pour accueillir vos projets photo, podcast, vidéo ou événementiel dans un cadre unique alliant charme authentique et modernité.
          </p>
        </div>
      </section>

      {/* Valeurs & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
              <h2 className="font-serif text-2xl font-medium mb-4 text-stone-800">Notre mission</h2>
              <p className="text-stone-700 flex-1">
                Offrir un lieu inspirant, modulable et accessible à tous les créateurs, entrepreneurs, artistes et passionnés, pour donner vie à leurs idées et favoriser les rencontres créatives.
              </p>
            </div>
            {/* Valeurs */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
              <h2 className="font-serif text-2xl font-medium mb-4 text-stone-800">Nos valeurs</h2>
              <ul className="list-disc pl-6 text-stone-700 space-y-2 mb-0">
                <li>Créativité & inspiration</li>
                <li>Accessibilité & partage</li>
                <li>Qualité & professionnalisme</li>
                <li>Respect & bienveillance</li>
                <li>Communauté & entraide</li>
              </ul>
            </div>
            {/* Notre équipe */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full md:col-span-2">
              <h2 className="font-serif text-2xl font-medium mb-4 text-stone-800">L’équipe</h2>
              <p className="text-stone-700 flex-1">
                Dream Studio est porté par l’équipe de LAYONN Style, marque de mode montpelliéraine engagée dans la création, l’innovation et le partage. Nous mettons notre expérience et notre passion au service de votre projet.
              </p>
            </div>
            {/* Inspiration Salesloft/Dribbble */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full md:col-span-2">
              <h2 className="font-serif text-2xl font-medium mb-4 text-stone-800">Pourquoi Dream Studio ?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Globe className="h-5 w-5 text-[#C6A76D] mr-3 mt-1" />
                  <span>
                    <b>Un espace ouvert sur le monde</b> : Nous accueillons des créateurs de tous horizons et favorisons la diversité des talents.
                  </span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-[#C6A76D] mr-3 mt-1" />
                  <span>
                    <b>Un lieu d’inspiration</b> : Chaque détail est pensé pour stimuler la créativité et encourager l’innovation.
                  </span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-[#C6A76D] mr-3 mt-1" />
                  <span>
                    <b>Une communauté engagée</b> : Rejoignez un réseau de professionnels, d’artistes et d’entrepreneurs passionnés.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#C6A76D] mr-3 mt-1" />
                  <span>
                    <b>Des services premium</b> : Studios équipés, accompagnement personnalisé, événements exclusifs et plus encore.
                  </span>
                </li>
              </ul>
            </div>
            {/* Contact */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full md:col-span-2">
              <h2 className="font-serif text-2xl font-medium mb-4 text-stone-800">Contact</h2>
              <p className="text-stone-700">
                Une question ? Un projet ?{" "}
                <a href="/reservation" className="text-[#C6A76D] underline hover:no-underline">
                  Contactez-nous ici
                </a>{" "}
                ou écrivez-nous à{" "}
                <a href="mailto:contact@dreamstudio.com" className="text-[#C6A76D] underline hover:no-underline">
                  contact@dreamstudio.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-medium mb-8 text-stone-800 text-center">FAQ</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-stone-800">
                Quels types de projets puis-je réaliser au Dream Studio ?
              </AccordionTrigger>
              <AccordionContent className="text-stone-700">
                Le Dream Studio accueille des shootings photo, enregistrements podcast, tournages vidéo, événements professionnels, ateliers, masterclass et bien plus encore.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-stone-800">
                Puis-je privatiser un espace pour un événement ?
              </AccordionTrigger>
              <AccordionContent className="text-stone-700">
                Oui, il est possible de privatiser tout ou partie du studio pour vos événements, réunions ou lancements de produits. Contactez-nous pour un devis personnalisé.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-stone-800">
                Quels équipements sont inclus ?
              </AccordionTrigger>
              <AccordionContent className="text-stone-700">
                Chaque espace dispose d’équipements professionnels : fonds photo, éclairages, micros, table de mixage, mobilier, Wi-Fi haut débit, etc. Consultez la page de chaque univers pour plus de détails.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-stone-800">
                Comment réserver une session ?
              </AccordionTrigger>
              <AccordionContent className="text-stone-700">
                Rendez-vous sur la page <a href="/reservation" className="text-[#C6A76D] underline">Réservation</a> pour choisir votre espace, sélectionner un créneau et réserver en ligne.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold text-stone-800">
                Proposez-vous des accompagnements ou formations ?
              </AccordionTrigger>
              <AccordionContent className="text-stone-700">
                Oui, nous proposons des ateliers, masterclass et accompagnements personnalisés pour vous aider à réaliser vos projets dans les meilleures conditions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  )
}