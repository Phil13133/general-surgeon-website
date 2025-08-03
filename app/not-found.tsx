import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-gray-300">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700">Η σελίδα δεν βρέθηκε</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Συγγνώμη, η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.
        </p>
        <Link href="/">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white">
            Επιστροφή στην Αρχική
          </Button>
        </Link>
      </div>
    </div>
  )
}