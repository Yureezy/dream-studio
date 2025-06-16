"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

interface CalendlyEmbedProps {
  url: string
  styles?: React.CSSProperties
  className?: string
  prefill?: {
    name?: string
    email?: string
    customAnswers?: {
      [key: string]: string
    }
  }
}

export default function CalendlyEmbed({ url, styles, className, prefill }: CalendlyEmbedProps) {
  const router = useRouter()

  useEffect(() => {
    // Add Calendly script
    const head = document.querySelector("head")
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    head?.appendChild(script)

    // Clean up
    return () => {
      head?.removeChild(script)
    }
  }, [])

  useEffect(() => {
    // Initialize Calendly when the component mounts
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: url,
        parentElement: document.getElementById("calendly-inline-widget"),
        prefill: prefill,
      })
    }

    // Handle Calendly events
    const handleCalendlyEvent = (e: any) => {
      if (e.data.event && e.data.event.indexOf("calendly") === 0) {
        // Event fired when scheduling is completed
        if (e.data.event === "calendly.event_scheduled") {
          router.push("/reservation/confirmation")
        }
      }
    }

    window.addEventListener("message", handleCalendlyEvent)

    return () => {
      window.removeEventListener("message", handleCalendlyEvent)
    }
  }, [url, prefill, router])

  return (
    <div className={className}>
      <div
        id="calendly-inline-widget"
        style={{
          minWidth: "320px",
          height: "700px",
          ...styles,
        }}
      >
        <div className="flex items-center justify-center h-full">
          <Loader2 className="h-8 w-8 animate-spin text-[#C6A76D]" />
        </div>
      </div>
    </div>
  )
}
