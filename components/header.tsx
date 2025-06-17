"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ChevronDown, Calendar, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isStudiosOpen, setIsStudiosOpen] = useState(false)
  const closeTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setIsStudiosOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setIsStudiosOpen(false), 150)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-xl font-medium">Dream Studio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/dream-cafe" className="text-stone-800 hover:text-[#C6A76D] transition-colors">
              Dream Café
            </Link>
            <Link href="/studio-photo" className="text-stone-800 hover:text-[#C6A76D] transition-colors">
              Studio photo
            </Link>
            <Link href="/studio-podcast" className="text-stone-800 hover:text-[#C6A76D] transition-colors">
              Podcast
            </Link>
            <Link href="/evenements" className="text-stone-800 hover:text-[#C6A76D] transition-colors">
              Réception
            </Link>
            <Link href="/abonnement" className="text-stone-800 hover:text-[#C6A76D] transition-colors">
              Abonnement
            </Link>
            <Link href="/a-propos" className="text-stone-800 hover:text-[#C6A76D] transition-colors">
              À propos
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="border-[#C6A76D] text-[#C6A76D] bg-stone-800 hover:text-white rounded-none">
              <Link href="/reservation">
                <Calendar className="mr-2 h-4 w-4" /> Réserver
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-stone-800" /> : <Menu className="h-6 w-6 text-stone-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-stone-800 hover:text-[#C6A76D] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/studio-photo"
                className="text-stone-800 hover:text-[#C6A76D] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Studio photo
              </Link>
              <Link
                href="/studio-podcast"
                className="text-stone-800 hover:text-[#C6A76D] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Podcast
              </Link>
              <Link
                href="/dream-cafe"
                className="text-stone-800 hover:text-[#C6A76D] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Dream Café
              </Link>
              <Link
                href="/evenements"
                className="text-stone-800 hover:text-[#C6A76D] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Réception
              </Link>
              <Link href="/abonnement" className="text-stone-800 hover:text-[#C6A76D] transition-colors">
                Abonnement
              </Link>
              <Link
                href="/a-propos"
                className="text-stone-800 hover:text-[#C6A76D] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Button asChild className="mt-8 border-[#C6A76D] text-[#C6A76D] bg-white hover:bg-[#C6A76D] hover:text-white rounded-none">
                <Link href="/reservation" onClick={() => setIsMenuOpen(false)}>
                  <Calendar className="mr-2 h-4 w-4" /> Réserver
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
