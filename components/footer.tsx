import Link from "next/link"
import { InstagramIcon, FacebookIcon, TwitterIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl mb-4">Dream Studio</h3>
            <p className="text-stone-400 mb-4">
              Un espace premium au cœur de Montpellier alliant charme authentique et modernité pour tous vos projets
              créatifs.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-stone-400 hover:text-[#C6A76D]">
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com" className="text-stone-400 hover:text-[#C6A76D]">
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-stone-400 hover:text-[#C6A76D]">
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/studio-photo" className="text-stone-400 hover:text-[#C6A76D]">
                  Photo
                </Link>
              </li>
              <li>
                <Link href="/studio-podcast" className="text-stone-400 hover:text-[#C6A76D]">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/dream-cafe" className="text-stone-400 hover:text-[#C6A76D]">
                  Dream Café
                </Link>
              </li>
              <li>
                <Link href="/evenements" className="text-stone-400 hover:text-[#C6A76D]">
                  Événements
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="text-stone-400 hover:text-[#C6A76D]">
                  Réservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg mb-4">Contact</h3>
            <address className="not-italic text-stone-400">
              <p className="mb-2">11 rue Alexandre Cabanel</p>
              <p className="mb-2">34000 Montpellier</p>
              <p className="mb-2">+33 6 12 34 56 78</p>
              <p>contact@dreamstudio.fr</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg mb-4">Newsletter</h3>
            <p className="text-stone-400 mb-4">Inscrivez-vous pour recevoir nos actualités et offres spéciales.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 w-full bg-stone-800 text-white border-none focus:outline-none focus:ring-2 focus:ring-[#C6A76D]"
              />
              <button type="submit" className="bg-[#C6A76D] px-4 py-2 text-white hover:bg-[#D4AF37]">
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-400">
          <p>© {new Date().getFullYear()} Dream Studio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
