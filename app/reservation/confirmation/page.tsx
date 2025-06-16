import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, ArrowLeft } from "lucide-react"

export default function ConfirmationPage() {
  return (
    <main className="pt-20">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-stone-800">Réservation confirmée !</h1>
            <p className="text-stone-600 mb-8 text-lg">
              Merci pour votre réservation. Vous recevrez un email de confirmation avec tous les détails de votre
              session.
            </p>

            <div className="bg-[#F5F5F0] p-6 rounded-lg mb-8">
              <h2 className="font-serif text-xl mb-4 text-stone-800">Prochaines étapes</h2>
              <ul className="text-left space-y-3 text-stone-600">
                <li className="flex items-start">
                  <span className="text-[#C6A76D] mr-2">1.</span>
                  <span>Vérifiez votre boîte mail pour les détails de votre réservation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C6A76D] mr-2">2.</span>
                  <span>Ajoutez l'événement à votre calendrier</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C6A76D] mr-2">3.</span>
                  <span>Préparez votre session en consultant nos recommandations</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="outline"
                className="border-[#C6A76D] text-[#C6A76D] hover:bg-[#C6A76D] hover:text-white rounded-none"
              >
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil
                </Link>
              </Button>
              <Button asChild className="bg-[#C6A76D] hover:bg-[#D4AF37] text-white rounded-none">
                <Link href="/reservation">
                  <Calendar className="mr-2 h-4 w-4" /> Réserver une autre session
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
