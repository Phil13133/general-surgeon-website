import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, AlertCircle, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image 
                src="/images/kkostoglanis-logo.svg" 
                alt="Dr. Κωνσταντίνος Κωστογλάνης Logo" 
                width={48} 
                height={48}
                className="w-12 h-12 transform group-hover:rotate-6 transition-transform"
              />
              <div>
                <div className="text-xl font-bold text-gray-800">Δρ. Κωστογλάνης Κωνσταντίνος</div>
                <div className="text-xs text-gray-500">Γενικός Χειρουργός</div>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
                Αρχική
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
                Σχετικά με εμάς
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
                Συχνές Ερωτήσεις
              </Link>
              <Link href="/contact" className="text-teal-600 font-medium relative">
                Επικοινωνία
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600"></span>
              </Link>
              <Button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all">
                Κλείστε Ραντεβού
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-cyan-50 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full blur-3xl opacity-20 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-100 to-teal-100 rounded-full blur-3xl opacity-20 translate-y-48 -translate-x-48"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              Είμαστε Διαθέσιμοι 24/7
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Επικοινωνήστε <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">μαζί μας</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Η ομάδα μας είναι εδώ για να απαντήσει σε όλες τις ερωτήσεις σας και να σας καθοδηγήσει στο ταξίδι σας προς την καλύτερη υγεία
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:rotate-6 transition-transform">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Τηλέφωνο</h3>
                <p className="text-gray-600 text-sm">Καλέστε μας για άμεση βοήθεια</p>
                <p className="text-teal-600 font-bold text-xl">+30 210 6890123</p>
                <div className="pt-2">
                  <span className="inline-flex items-center text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Διαθέσιμοι 24/7
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:rotate-6 transition-transform">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Email</h3>
                <p className="text-gray-600 text-sm">Στείλτε μας μήνυμα</p>
                <p className="text-blue-600 font-bold text-lg break-all">info@drkostoglanis.gr</p>
                <div className="pt-2">
                  <span className="inline-flex items-center text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    Απάντηση &lt; 24h
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:rotate-6 transition-transform">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Διεύθυνση</h3>
                <p className="text-gray-600 text-sm">Επισκεφθείτε μας</p>
                <p className="text-green-600 font-bold">Παρνασσίδος 59, Χαλάνδρι</p>
                <div className="pt-2">
                  <span className="inline-flex items-center text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    Εύκολη Πρόσβαση
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:rotate-6 transition-transform">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Ώρες Λειτουργίας</h3>
                <p className="text-gray-600 text-sm">Δευτέρα - Παρασκευή</p>
                <p className="text-purple-600 font-bold text-xl">9:00 - 17:00</p>
                <div className="pt-2">
                  <span className="inline-flex items-center text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                    Έκτακτα Ραντεβού
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Send className="w-4 h-4 mr-2" />
                Απάντηση Εντός 24 Ωρών
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Στείλτε μας Μήνυμα</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Συμπληρώστε τη φόρμα και η ομάδα μας θα επικοινωνήσει μαζί σας το συντομότερο δυνατό
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Όνομα <span className="text-red-500">*</span>
                          </label>
                          <Input 
                            placeholder="π.χ. Γιώργος Παπαδόπουλος" 
                            className="w-full border-gray-300 focus:border-teal-500 focus:ring-teal-500" 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <Input 
                            type="email" 
                            placeholder="π.χ. name@example.com" 
                            className="w-full border-gray-300 focus:border-teal-500 focus:ring-teal-500" 
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Τηλέφωνο</label>
                          <Input 
                            placeholder="π.χ. +30 69XXXXXXXX" 
                            className="w-full border-gray-300 focus:border-teal-500 focus:ring-teal-500" 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Τύπος Ραντεβού</label>
                          <select className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-teal-500 focus:ring-teal-500">
                            <option>Επιλέξτε...</option>
                            <option>Πρώτη Επίσκεψη</option>
                            <option>Προεγχειρητικός Έλεγχος</option>
                            <option>Επανεξέταση</option>
                            <option>Έκτακτη Ανάγκη</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Μήνυμα <span className="text-red-500">*</span>
                        </label>
                        <Textarea 
                          placeholder="Περιγράψτε τον λόγο επικοινωνίας και τυχόν συμπτώματα..." 
                          className="w-full min-h-[150px] border-gray-300 focus:border-teal-500 focus:ring-teal-500" 
                        />
                      </div>

                      <div className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-3" />
                        <label className="text-sm text-gray-600">
                          Συμφωνώ με την <a href="#" className="text-teal-600 hover:underline">πολιτική απορρήτου</a> και την επεξεργασία των προσωπικών μου δεδομένων
                        </label>
                      </div>

                      <div className="text-center pt-4">
                        <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-12 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                          <Send className="w-5 h-5 mr-2" />
                          Αποστολή Μηνύματος
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-cyan-50">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2 text-teal-600" />
                      Γρήγορη Απάντηση
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Η ομάδα μας θα επικοινωνήσει μαζί σας εντός 24 ωρών. Για επείγοντα περιστατικά, καλέστε απευθείας.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Συχνές Ερωτήσεις</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">Πώς μπορώ να κλείσω ραντεβού;</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">Ποιες ασφάλειες δέχεστε;</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">Τι πρέπει να φέρω στο ραντεβού;</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">Πόσο κοστίζει μια επίσκεψη;</span>
                      </li>
                    </ul>
                    <Link href="/faq" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium mt-4 text-sm">
                      Δείτε όλες τις ερωτήσεις
                      <span className="ml-1">→</span>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Έκτακτη Ανάγκη;</h2>
            <p className="text-xl mb-8 text-red-100">Σε περίπτωση επείγουσας ιατρικής ανάγκης, καλέστε μας αμέσως</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center bg-white/20 rounded-lg px-6 py-3">
                <Phone className="w-6 h-6 mr-3" />
                <span className="text-2xl font-bold">+30 210 6890123</span>
              </div>
              <div className="text-red-100">Διαθέσιμοι 24 ώρες το 24ωρο, 7 ημέρες την εβδομάδα</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Ακολουθήστε μας</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Μείνετε ενημερωμένοι με τα τελευταία νέα και συμβουλές υγείας μέσω των social media μας
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
              <span className="text-white text-xl font-bold">f</span>
            </div>
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
              <span className="text-white text-lg font-bold">G+</span>
            </div>
            <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
              <span className="text-white text-xl font-bold">t</span>
            </div>
            <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors cursor-pointer">
              <span className="text-white text-lg font-bold">in</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Δρ. Κωστογλάνης</h3>
              <p className="text-teal-100 mb-4">
                Όταν η υγεία σας είναι προτεραιότητα, εμείς είμαστε εδώ να σας βοηθήσουμε με την καλύτερη ιατρική
                φροντίδα.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Σύνδεσμοι</h4>
              <ul className="space-y-2 text-teal-100">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Περιοχές Υπηρεσιών
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Σχετικά
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Επικοινωνία
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Επικοινωνία</h4>
              <div className="space-y-3 text-teal-100">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Παρνασσίδος 59, Χαλάνδρι</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+30 210 6890123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>info@drkostoglanis.gr</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Ακολουθήστε μας</h4>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">G+</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-teal-500 mt-12 pt-8 text-center text-teal-100">
            <p>&copy; 2024 Δρ. Κωστογλάνης Κωνσταντίνος. Όλα τα δικαιώματα διατηρούνται.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
