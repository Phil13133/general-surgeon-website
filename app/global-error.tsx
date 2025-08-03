'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global error:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center space-y-6 max-w-md mx-auto p-8">
            <h1 className="text-6xl font-bold text-gray-900">Ωχ!</h1>
            <h2 className="text-2xl font-semibold text-gray-700">Κάτι πήγε σοβαρά στραβά</h2>
            <p className="text-gray-600">
              Συγγνώμη, αντιμετωπίσαμε ένα απροσδόκητο σφάλμα. Παρακαλούμε ανανεώστε τη σελίδα ή δοκιμάστε ξανά.
            </p>
            <div className="space-y-4">
              <Button
                onClick={reset}
                className="bg-teal-600 hover:bg-teal-700 text-white w-full"
              >
                Δοκιμάστε ξανά
              </Button>
              <Button
                onClick={() => window.location.href = '/'}
                variant="outline"
                className="w-full"
              >
                Επιστροφή στην Αρχική
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}