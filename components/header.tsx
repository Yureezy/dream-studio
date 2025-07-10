"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const univers = document.getElementById("univers")
      if (!univers) return
      const rect = univers.getBoundingClientRect()
      setHide(rect.top <= 80) // 80px = hauteur du header
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-500 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-between h-16 px-4 md:px-8">
        {/* Menu burger à gauche */}
        <button
          className="md:hidden flex items-center justify-center h-10 w-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Ouvrir le menu"
        >
          <Menu className="h-7 w-7 text-stone-800" />
        </button>

        {/* Titre centré */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span
            className="text-stone-800 text-2xl font-bold"
            style={{ fontFamily: '"Dream Avenue", serif' }}
          >
            Dream Studio
          </span>
        </div>

        {/* Espace à droite pour équilibrer */}
        <div className="w-10 h-10 md:hidden" />
      </div>

      {/* Menu mobile déroulant */}
      {isMenuOpen && (
        <nav className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white/90 shadow-lg z-50 flex flex-col gap-6 p-8 md:hidden animate-fade-in-left">
          <Link
            href="/dream-cafe"
            className="text-stone-800 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Dream Café
          </Link>
          <Link
            href="/studio-photo"
            className="text-stone-800 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Studio photo
          </Link>
          <Link
            href="/studio-podcast"
            className="text-stone-800 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Podcast
          </Link>
          <Link
            href="/evenements"
            className="text-stone-800 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Réception
          </Link>
          <Link
            href="/abonnement"
            className="text-stone-800 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Abonnement
          </Link>
          <Link
            href="/a-propos"
            className="text-stone-800 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            À propos
          </Link>
        </nav>
      )}
    </header>
  )
}
