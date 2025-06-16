"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar } from "lucide-react"

export default function ReservationCta() {
  return (
    <section className="bg-[#C6A76D] py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-white">
          Réservez votre session privative
        </h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Que ce soit pour un shooting photo, un enregistrement podcast, une masterclass ou un événement privé, réservez
          votre créneau 100% privatif en quelques clics.
        </p>
        <Button asChild className="bg-white text-[#C6A76D] hover:bg-stone-800 rounded-none px-8 py-6">
          <Link
            href="/reservation#booking-calendar"
            onClick={(e) => {
              // If we're already on the reservation page, scroll to the calendar
              if (window.location.pathname === "/reservation") {
                e.preventDefault()
                const element = document.getElementById("booking-calendar")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }
            }}
          >
            <Calendar className="mr-2 h-5 w-5" /> Réserver maintenant
          </Link>
        </Button>
      </div>
    </section>
  )
}
