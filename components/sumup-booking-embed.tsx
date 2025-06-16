"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

interface SumUpBookingEmbedProps {
  className?: string
  height?: number
}

export default function SumUpBookingEmbed({ className, height = 700 }: SumUpBookingEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`w-full ${className}`}>
      <div className="relative" style={{ height: `${height}px` }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <Loader2 className="h-8 w-8 animate-spin text-[#C6A76D]" />
          </div>
        )}
        <iframe
          src="https://www.sumupbookings.com/visionr-media"
          width="100%"
          height="100%"
          frameBorder="0"
          title="SumUp Booking - Dream Studio"
          className="absolute inset-0"
          onLoad={() => setIsLoading(false)}
          allow="fullscreen"
        />
      </div>
    </div>
  )
}
