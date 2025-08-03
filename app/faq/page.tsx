import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Phone, Mail, Clock, ChevronRight, MessageSquare, Search, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FAQPage() {
  const faqs = [
    {
      question: "Πώς μπορώ να κλείσω ραντεβού;",
      answer:
        "Μπορείτε να κλείσετε ραντεβού τηλεφωνικά στο +30 210 6890123, μέσω email στο info@drkostoglanis.gr ή συμπληρώνοντας τη φόρμα επικοινωνίας στην ιστοσελίδα μας. Προσπαθούμε να ανταποκρινόμαστε σε όλα τα αιτήματα εντός 24 ωρών.",
    },
    {
      question: "Τι πρέπει να φέρω στο πρώτο ραντεβού;",
      answer:
        "Παρακαλούμε φέρτε μαζί σας την ταυτότητά σας, το βιβλιάριο υγείας, τυχόν προηγούμενες εξετάσεις ή ιατρικά έγγραφα που σχετίζονται με το πρόβλημά σας, και μια λίστα με τα φάρμακα που παίρνετε.",
    },
    {
      question: "Ποιες ασφαλιστικές εταιρείες δέχεστε;",
      answer:
        "Συνεργαζόμαστε με τον ΕΟΠΥΥ και τις περισσότερες ιδιωτικές ασφαλιστικές εταιρείες. Παρακαλούμε επικοινωνήστε μαζί μας για να επιβεβαιώσουμε τη συνεργασία με την ασφαλιστική σας εταιρεία.",
    },
    {
      question: "Πόσο διαρκεί μια τυπική επίσκεψη;",
      answer:
        "Η πρώτη επίσκεψη διαρκεί συνήθως 45-60 λεπτά, καθώς περιλαμβάνει λεπτομερή ιστορικό και εξέταση. Οι επόμενες επισκέψεις διαρκούν περίπου 30 λεπτά.",
    },
    {
      question: "Προσφέρετε υπηρεσίες έκτακτης ανάγκης;",
      answer:
        "Ναι, προσφέρουμε 24ωρη κάλυψη για επείγουσες περιπτώσεις. Σε περίπτωση έκτακτης ανάγκης, καλέστε στο +30 210 6890123 και θα σας καθοδηγήσουμε.",
    },
    {
      question: "Τι είδους χειρουργικές επεμβάσεις εκτελείτε;",
      answer:
        "Εκτελούμε ένα ευρύ φάσμα γενικών χειρουργικών επεμβάσεων, συμπεριλαμβανομένων λαπαροσκοπικών επεμβάσεων, χειρουργικής κηλών, χειρουργικής θυρεοειδούς, και επεμβάσεων στο γαστρεντερικό σύστημα.",
    },
    {
      question: "Πόσος χρόνος χρειάζεται για ανάρρωση μετά από λαπαροσκοπική επέμβαση;",
      answer:
        "Η ανάρρωση από λαπαροσκοπικές επεμβάσεις είναι συνήθως ταχύτερη από τις παραδοσιακές ανοιχτές επεμβάσεις. Οι περισσότεροι ασθενείς επιστρέφουν στις κανονικές τους δραστηριότητες σε 1-2 εβδομάδες.",
    },
    {
      question: "Παρέχετε δεύτερη γνώμη;",
      answer:
        "Ναι, παρέχουμε υπηρεσίες δεύτερης γνώμης. Μπορείτε να κλείσετε ραντεβού φέρνοντας μαζί σας όλα τα σχετικά ιατρικά έγγραφα και εξετάσεις.",
    },
    {
      question: "Πώς προετοιμάζομαι για μια χειρουργική επέμβαση;",
      answer:
        "Θα σας δοθούν λεπτομερείς οδηγίες προετοιμασίας πριν από κάθε επέμβαση. Αυτές περιλαμβάνουν οδηγίες για τη διατροφή, τα φάρμακα, και τυχόν προεγχειρητικές εξετάσεις που χρειάζονται.",
    },
    {
      question: "Υπάρχει δυνατότητα τηλεϊατρικής;",
      answer:
        "Ναι, προσφέρουμε υπηρεσίες τηλεϊατρικής για συμβουλευτικές επισκέψεις και παρακολούθηση. Επικοινωνήστε μαζί μας για να μάθετε περισσότερα για τις διαθέσιμες επιλογές.",
    },
  ]

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
              <Link href="/faq" className="text-teal-600 font-medium relative">
                Συχνές Ερωτήσεις
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600"></span>
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full blur-3xl opacity-20 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-100 to-teal-100 rounded-full blur-3xl opacity-20 translate-y-48 -translate-x-48"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Search className="w-4 h-4 mr-2" />
              Γρήγορες Απαντήσεις στις Ερωτήσεις Σας
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Συχνές <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Ερωτήσεις</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις. Αν χρειάζεστε περισσότερη βοήθεια, 
              είμαστε εδώ για εσάς.
            </p>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md">
              <HelpCircle className="w-5 h-5 text-teal-600 mr-2" />
              <span className="text-gray-700 font-medium">10+ Κατηγορίες</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md">
              <MessageSquare className="w-5 h-5 text-teal-600 mr-2" />
              <span className="text-gray-700 font-medium">50+ Απαντήσεις</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md">
              <Clock className="w-5 h-5 text-teal-600 mr-2" />
              <span className="text-gray-700 font-medium">Ενημερωμένες Συνεχώς</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-2">
            <button className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full whitespace-nowrap font-medium">
              Όλες
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap font-medium">
              Ραντεβού & Επισκέψεις
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap font-medium">
              Χειρουργικές Επεμβάσεις
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap font-medium">
              Κόστος & Ασφάλεια
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap font-medium">
              Μετα-εγχειρητική Φροντίδα
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-800">Κύριες Ερωτήσεις</h2>
              <div className="text-sm text-gray-600">
                Εμφάνιση {faqs.length} από {faqs.length} ερωτήσεις
              </div>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border-0 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                    <div className="flex items-start text-left flex-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:from-teal-200 group-hover:to-cyan-200 transition-colors">
                        <span className="text-teal-700 font-bold">{index + 1}</span>
                      </div>
                      <span className="text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition-colors pr-4">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pl-14 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              Πολλαπλοί Τρόποι Επικοινωνίας
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Χρειάζεστε περισσότερη βοήθεια;</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Αν δεν βρήκατε την απάντηση που ψάχνατε, επικοινωνήστε μαζί μας με έναν από τους παρακάτω τρόπους
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:rotate-6 transition-transform">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Τηλεφωνική Επικοινωνία</h3>
                <p className="text-gray-600 text-sm">Καλέστε μας για άμεση βοήθεια</p>
                <p className="text-teal-600 font-bold text-xl">+30 210 6890123</p>
                <div className="pt-2">
                  <p className="text-sm text-gray-500">Δευτέρα - Παρασκευή: 9:00 - 17:00</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:rotate-6 transition-transform">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Email</h3>
                <p className="text-gray-600 text-sm">Στείλτε μας μήνυμα</p>
                <p className="text-blue-600 font-bold">info@drkostoglanis.gr</p>
                <div className="pt-2">
                  <p className="text-sm text-gray-500">Απαντάμε εντός 24 ωρών</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:rotate-6 transition-transform">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Έκτακτη Ανάγκη</h3>
                <p className="text-gray-600 text-sm">24ωρη κάλυψη</p>
                <p className="text-red-600 font-bold text-xl">+30 210 6890123</p>
                <div className="pt-2">
                  <p className="text-sm text-red-500 font-medium">Διαθέσιμοι 24/7</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Χρήσιμοι Σύνδεσμοι</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Επιπλέον πληροφορίες που μπορεί να σας φανούν χρήσιμες</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link href="/about" className="block">
              <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                <CardContent className="space-y-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-teal-600 font-bold">i</span>
                  </div>
                  <h3 className="font-semibold">Σχετικά με εμάς</h3>
                  <p className="text-sm text-gray-600">Μάθετε περισσότερα για τον γιατρό</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/contact" className="block">
              <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                <CardContent className="space-y-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-blue-600 font-bold">@</span>
                  </div>
                  <h3 className="font-semibold">Επικοινωνία</h3>
                  <p className="text-sm text-gray-600">Στοιχεία επικοινωνίας</p>
                </CardContent>
              </Card>
            </Link>

            <Card className="p-6 hover:shadow-lg transition-shadow text-center cursor-pointer">
              <CardContent className="space-y-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-green-600 font-bold">+</span>
                </div>
                <h3 className="font-semibold">Υπηρεσίες</h3>
                <p className="text-sm text-gray-600">Όλες οι υπηρεσίες μας</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow text-center cursor-pointer">
              <CardContent className="space-y-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-purple-600 font-bold">📅</span>
                </div>
                <h3 className="font-semibold">Ραντεβού</h3>
                <p className="text-sm text-gray-600">Κλείστε ραντεβού online</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Δεν βρήκατε την απάντηση που ψάχνατε;</h2>
            <p className="text-xl mb-8 text-teal-100">Επικοινωνήστε μαζί μας και θα χαρούμε να σας βοηθήσουμε</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                Επικοινωνήστε μαζί μας
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
              >
                Κλείστε Ραντεβού
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
