'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-900">Ωχ!</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Κάτι πήγε στραβά</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Συγγνώμη, αντιμετωπίσαμε ένα απροσδόκητο σφάλμα. Παρακαλούμε δοκιμάστε ξανά.
        </p>
        <Button
          onClick={reset}
          className="bg-teal-600 hover:bg-teal-700 text-white"
        >
          Δοκιμάστε ξανά
        </Button>
      </div>
    </div>
  )
}