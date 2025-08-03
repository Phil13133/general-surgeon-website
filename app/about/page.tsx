import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Heart, Clock, GraduationCap, Stethoscope, Shield, Target, BookOpen, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
              <Link href="/about" className="text-teal-600 font-medium relative">
                Σχετικά με εμάς
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600"></span>
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
                Συχνές Ερωτήσεις
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
                Επικοινωνία
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full blur-3xl opacity-30 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-100 to-teal-100 rounded-full blur-3xl opacity-30 translate-y-48 -translate-x-48"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Πιστοποιημένος Χειρουργός με Διεθνή Αναγνώριση
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Σχετικά με τον <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Δρ. Κωστογλάνη</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Πρωτοπόρος στη λαπαροσκοπική χειρουργική με πάνω από 15 χρόνια εμπειρίας και χιλιάδες επιτυχημένες επεμβάσεις
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl transform rotate-3"></div>
              <Image
                src="/placeholder.jpg"
                alt="Δρ. Κωστογλάνης Κωνσταντίνος"
                width={500}
                height={600}
                className="relative rounded-3xl shadow-2xl object-cover z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 z-20">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">Top 1%</div>
                    <div className="text-sm text-gray-600">Χειρουργών Ελλάδας</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  <Target className="w-4 h-4 mr-2" />
                  Αποστολή & Όραμα
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Δρ. Κωστογλάνης Κωνσταντίνος</h2>
                <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 font-semibold mb-6">Πρωτοπόρος Γενικός Χειρουργός</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Με πάθος για την τελειότητα και αφοσίωση στην καινοτομία, ο Δρ. Κωστογλάνης συνδυάζει την κλασική
                  χειρουργική εμπειρία με τις πιο σύγχρονες ελάχιστα επεμβατικές τεχνικές. Η προσέγγισή του βασίζεται
                  στην εξατομικευμένη φροντίδα και την ολιστική αντιμετώπιση κάθε ασθενούς.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ως μέλος διεθνών χειρουργικών εταιρειών και με συνεχή εκπαίδευση σε κορυφαία ιατρικά κέντρα του
                  εξωτερικού, εξασφαλίζει ότι οι ασθενείς του λαμβάνουν θεραπεία παγκόσμιου επιπέδου.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2">15+</div>
                  <div className="text-gray-700 font-medium">Χρόνια Αριστείας</div>
                  <div className="text-sm text-gray-500 mt-1">Συνεχούς εξέλιξης</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">5000+</div>
                  <div className="text-gray-700 font-medium">Επιτυχημένες Επεμβάσεις</div>
                  <div className="text-sm text-gray-500 mt-1">98.5% επιτυχία</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-gray-50 rounded-full px-4 py-2">
                  <Globe className="w-5 h-5 text-teal-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Διεθνής Εμπειρία</span>
                </div>
                <div className="flex items-center bg-gray-50 rounded-full px-4 py-2">
                  <BookOpen className="w-5 h-5 text-teal-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Δημοσιεύσεις</span>
                </div>
                <div className="flex items-center bg-gray-50 rounded-full px-4 py-2">
                  <Users className="w-5 h-5 text-teal-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Εκπαιδευτής</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              Ακαδημαϊκή Αριστεία
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Εκπαίδευση & Πιστοποιήσεις</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Μια διαδρομή αφοσίωσης στη συνεχή μάθηση και την κλινική τελειότητα
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-200 to-transparent -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Ιατρική Σχολή</h3>
                  <p className="text-gray-600 font-medium">Εθνικό & Καποδιστριακό Πανεπιστήμιο Αθηνών</p>
                  <p className="text-sm text-gray-500">1995-2001 • Άριστα</p>
                  <div className="pt-4">
                    <span className="inline-flex items-center text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      Top 5% της τάξης
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform">
                    <Stethoscope className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Εξειδίκευση</h3>
                  <p className="text-gray-600 font-medium">Γενική Χειρουργική - Νοσοκομείο "Ευαγγελισμός"</p>
                  <p className="text-sm text-gray-500">2002-2008</p>
                  <div className="pt-4">
                    <span className="inline-flex items-center text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      Chief Resident 2007-2008
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Πιστοποίηση EAES</h3>
                  <p className="text-gray-600 font-medium">Λαπαροσκοπική Χειρουργική - European Association</p>
                  <p className="text-sm text-gray-500">2009 • Βρυξέλλες</p>
                  <div className="pt-4">
                    <span className="inline-flex items-center text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                      Διεθνής Αναγνώριση
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 text-center border border-teal-100">
              <div className="text-3xl font-bold text-teal-600 mb-2">25+</div>
              <div className="text-sm text-gray-600">Διεθνή Συνέδρια</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Δημοσιεύσεις</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center border border-purple-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
              <div className="text-sm text-gray-600">Βραβεία Αριστείας</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">4</div>
              <div className="text-sm text-gray-600">Γλώσσες</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Εξειδικεύσεις</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Εξειδικευμένες υπηρεσίες για την αντιμετώπιση ποικίλων χειρουργικών περιπτώσεων
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Κύριες Εξειδικεύσεις</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Λαπαροσκοπική Χειρουργική</h4>
                    <p className="text-gray-600">Μινιμαλιστικές επεμβάσεις με ταχύτερη ανάρρωση</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Χειρουργική Κοιλιάς</h4>
                    <p className="text-gray-600">Επεμβάσεις στο γαστρεντερικό σύστημα</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Χειρουργική Κηλών</h4>
                    <p className="text-gray-600">Αποκατάσταση κηλών με σύγχρονες τεχνικές</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Χειρουργική Θυρεοειδούς</h4>
                    <p className="text-gray-600">Εξειδικευμένες επεμβάσεις θυρεοειδούς αδένα</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Επιπλέον Υπηρεσίες</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Προληπτικός Έλεγχος</h4>
                    <p className="text-gray-600">Τακτικές εξετάσεις για πρόληψη</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Επείγουσες Περιπτώσεις</h4>
                    <p className="text-gray-600">24ωρη κάλυψη για επείγοντα περιστατικά</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Μετεγχειρητική Φροντίδα</h4>
                    <p className="text-gray-600">Παρακολούθηση και υποστήριξη μετά την επέμβαση</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Συμβουλευτική</h4>
                    <p className="text-gray-600">Εξατομικευμένη συμβουλευτική για κάθε ασθενή</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Οι Αξίες μας</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Οι αρχές που καθοδηγούν την καθημερινή μας πρακτική και τη φροντίδα των ασθενών μας
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Συμπόνια</h3>
              <p className="text-gray-600">Κατανοούμε τις ανάγκες και τους φόβους των ασθενών μας</p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Αριστεία</h3>
              <p className="text-gray-600">Στοχεύουμε στην υψηλότερη ποιότητα φροντίδας</p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Εμπιστοσύνη</h3>
              <p className="text-gray-600">Χτίζουμε μακροχρόνιες σχέσεις με τους ασθενείς μας</p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Διαθεσιμότητα</h3>
              <p className="text-gray-600">Είμαστε εδώ όταν μας χρειάζεστε περισσότερο</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Έτοιμοι να σας βοηθήσουμε;</h2>
            <p className="text-xl mb-8 text-teal-100">
              Κλείστε το ραντεβού σας σήμερα και ξεκινήστε το ταξίδι προς την καλύτερη υγεία
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                Κλείστε Ραντεβού
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
              >
                Επικοινωνήστε μαζί μας
              </Button>
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
                <div>Παρνασσίδος 59, Χαλάνδρι</div>
                <div>+30 210 6890123</div>
                <div>info@drkostoglanis.gr</div>
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
