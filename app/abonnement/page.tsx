import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AbonnementPage() {
  return (
    <main className="pt-20">
      <section className="bg-[#F5F5F0] py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-8 text-center text-stone-800">
            Nos abonnements
          </h1>
          <p className="text-stone-600 text-lg mb-12 text-center max-w-2xl mx-auto">
            Rejoignez la communauté Dream Studio et profitez d’un accès privilégié à nos espaces, à des tarifs avantageux et à de nombreux avantages exclusifs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Abonnement Creator */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🎙</span>
                <h2 className="font-serif text-2xl font-medium text-stone-800">Abonnement Creator</h2>
              </div>
              <p className="text-[#C6A76D] font-bold mb-2">Dès 39,90€/mois • Limité à 40 membres</p>
              <p className="text-stone-700 mb-4">
                Pour créateurs de contenu, artistes, influenceurs ou entrepreneurs passionnés. Tournez, shootez, connectez-vous et vibrez au cœur du Dream Studio à Montpellier.
              </p>
              <ul className="mb-4 text-stone-700 space-y-2">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#C6A76D] mr-2 mt-1" />1h/semaine (4h/mois) dans l’espace de votre choix (studio podcast, studio photo/vidéo, Dream Coffee)</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#C6A76D] mr-2 mt-1" />1 boisson chaude + 1 boisson fraîche offertes à chaque venue</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#C6A76D] mr-2 mt-1" />Accès aux afterworks du Studio (invitation privée)</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#C6A76D] mr-2 mt-1" />-20% sur toutes les consommations au Dream Coffee</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#C6A76D] mr-2 mt-1" />-20% sur la marque LAYONN (en boutique)</li>
              </ul>
              <div className="mb-4">
                <span className="font-semibold text-stone-800">Formules dégressives :</span>
                <ul className="ml-4 text-stone-700">
                  <li>• 1 mois : 59,90€ TTC</li>
                  <li>• 6 mois : 49,90€/mois</li>
                  <li>• 12 mois : 39,90€/mois</li>
                </ul>
              </div>
              <p className="text-sm text-stone-500 mb-2">🚨 Seulement 40 abonnements disponibles pour garantir une expérience premium et fluide.</p>
            </div>
            {/* Abonnement Pro & B2B */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">💼</span>
                <h2 className="font-serif text-2xl font-medium text-stone-800">Abonnement Pro & B2B</h2>
              </div>
              <p className="text-[#C6A76D] font-bold mb-2">Dès 159€/mois HT • Limité à 20 entreprises</p>
              <p className="text-stone-700 mb-4">
                Pour entrepreneurs, agences, freelances et marques qui veulent produire du contenu, gagner en notoriété et profiter d’un écosystème dynamique.
              </p>
              <ul className="mb-4 text-stone-700 space-y-2">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#C6A76D] mr-2 mt-1" />1h d’accès/semaine à nos espaces (podcast, shooting ou réunion)</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#C6A76D] mr-2 mt-1" />Boissons offertes à chaque visite (jusqu’à 2 pers.)</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#C6A76D] mr-2 mt-1" />1 mise en avant mensuelle sur notre Instagram (interview ou capsule vidéo)</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#C6A76D] mr-2 mt-1" />-20% sur les consommations au Dream Coffee</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#C6A76D] mr-2 mt-1" />-20% sur la marque LAYONN (mode et accessoires)</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#C6A76D] mr-2 mt-1" />1 événement ou workshop/trimestre à tarif préférentiel</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#C6A76D] mr-2 mt-1" />Accès aux afterworks professionnels du Studio</li>
              </ul>
              <div className="mb-4">
                <span className="font-semibold text-stone-800">Formules dégressives :</span>
                <ul className="ml-4 text-stone-700">
                  <li>• 1 mois : 199€ HT</li>
                  <li>• 6 mois : 179€/mois</li>
                  <li>• 12 mois : 159€/mois</li>
                </ul>
              </div>
              <p className="text-sm text-stone-500 mb-2">➕ Options disponibles : montage, régie, prestations créatives sur mesure.</p>
              <p className="text-sm text-stone-500">🚨 Seulement 20 entreprises pour garantir un accompagnement personnalisé.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/reservation"
              className="inline-block border-[#C6A76D] text-[#C6A76D] border-2 px-8 py-4 rounded-none font-semibold hover:bg-[#C6A76D] hover:text-white transition-colors"
            >
              Je veux m’abonner ou en savoir plus
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}