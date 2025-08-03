import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Users,
  Heart,
  Shield,
  Stethoscope,
  Activity,
  Zap,
  Eye,
  UserCheck,
  CheckCircle,
  Calendar,
  Star,
  Building2,
  GraduationCap,
  FileText,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with transparent effect */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <Image 
                src="/images/kkostoglanis-logo.svg" 
                alt="Dr. Κωνσταντίνος Κωστογλάνης Logo" 
                width={48} 
                height={48}
                className="w-12 h-12"
              />
              <div>
                <div className="text-lg font-bold text-gray-900">Δρ. Κωστογλάνης Κωνσταντίνος</div>
                <div className="text-xs text-teal-600">Γενικός Χειρουργός</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Αρχική
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Ο Γιατρός
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Συχνές Ερωτήσεις
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Επικοινωνία
              </Link>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/20">
                <Phone className="w-4 h-4 mr-2" />
                210 6890123
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - Asymmetric modern design */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-teal-50 via-white to-cyan-50 pt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-8">
              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-semibold">30+ Χρόνια Εμπειρίας</span>
                </div>
                <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-semibold">5.000+ Επιτυχημένες Επεμβάσεις</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Γενικός Χειρουργός με 25ετή <span className="text-teal-600">Εμπειρία</span> & Σύγχρονη Προσέγγιση
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                30+ χρόνια εμπειρίας στη λαπαροσκοπική και ελάχιστα επεμβατική χειρουργική. 
                Εξατομικευμένη φροντίδα για κάθε ασθενή στο σύγχρονο ιατρείο μας στο Χαλάνδρι.
              </p>

              {/* Key metrics */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">5.000+</div>
                  <div className="text-sm text-gray-600">Επιτυχημένες Επεμβάσεις</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">98%</div>
                  <div className="text-sm text-gray-600">Ικανοποίηση Ασθενών</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">24/7</div>
                  <div className="text-sm text-gray-600">Διαθεσιμότητα</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white shadow-xl shadow-teal-600/20 text-lg px-8">
                  <Calendar className="w-5 h-5 mr-2" />
                  Κλείστε Ραντεβού
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 text-lg px-8"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Επείγον: 210 6890123
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="relative">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-3xl opacity-20 scale-90"></div>
                
                {/* Transparent image without background */}
                <Image
                  src="/images/Hero-image.webp"
                  alt="Δρ. Κωστογλάνης Κωνσταντίνος"
                  width={500}
                  height={600}
                  className="relative z-10 drop-shadow-2xl"
                  style={{ 
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))',
                    backgroundColor: 'transparent'
                  }}
                />
                
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs z-20">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center">
                      <Award className="w-7 h-7 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Εξειδίκευση</div>
                      <div className="text-sm text-gray-600">Λαπαροσκοπική Χειρουργική</div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500 rounded-full opacity-10"></div>
                <div className="absolute bottom-20 -right-8 w-32 h-32 bg-cyan-500 rounded-full opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center animate-pulse">
                <Zap className="w-6 h-6 text-teal-300" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">Επείγουσα Ανάγκη;</div>
                <div className="text-sm text-gray-300">Διαθέσιμοι 24/7 για επείγοντα περιστατικά</div>
              </div>
            </div>
            <Button size="lg" className="bg-teal-500 text-white hover:bg-teal-400 shadow-lg border-2 border-teal-400/30 backdrop-blur-sm">
              <Phone className="w-5 h-5 mr-2" />
              Καλέστε Τώρα: 210 6890123
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - Modern card design */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ΥΠΗΡΕΣΙΕΣ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Εξειδικευμένες Χειρουργικές Υπηρεσίες
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Προσφέρουμε ολοκληρωμένες χειρουργικές λύσεις με έμφαση στις ελάχιστα επεμβατικές τεχνικές
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-teal-500 to-teal-600"></div>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Λαπαροσκοπική Χειρουργική</h3>
                <p className="text-gray-600 mb-6">
                  Ελάχιστα επεμβατικές τεχνικές με μικρές τομές για ταχύτερη ανάρρωση και λιγότερο πόνο
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Χολοκυστεκτομή
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Σκωληκοειδεκτομή
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Επιδιόρθωση κηλών
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service Card 2 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-cyan-500 to-cyan-600"></div>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Activity className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Χειρουργική Θυρεοειδούς</h3>
                <p className="text-gray-600 mb-6">
                  Εξειδικευμένες επεμβάσεις θυρεοειδούς με σύγχρονες τεχνικές για βέλτιστα αποτελέσματα
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-cyan-600 mr-2" />
                    Ολική θυρεοειδεκτομή
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-cyan-600 mr-2" />
                    Ημιθυρεοειδεκτομή
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-cyan-600 mr-2" />
                    Παραθυρεοειδεκτομή
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service Card 3 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-teal-600 to-cyan-600"></div>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Stethoscope className="w-8 h-8 text-teal-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Γαστρεντερική Χειρουργική</h3>
                <p className="text-gray-600 mb-6">
                  Ολοκληρωμένη αντιμετώπιση παθήσεων του πεπτικού συστήματος με προηγμένες μεθόδους
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Χειρουργική παχέος εντέρου
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Αντιμετώπιση αιμορροΐδων
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Επεμβάσεις ήπατος
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50">
              Δείτε Όλες τις Υπηρεσίες
              <FileText className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ΕΜΠΕΙΡΙΑ & ΕΞΕΙΔΙΚΕΥΣΗ
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Δρ. Κωνσταντίνος Κωστογλάνης
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Πάνω από 30 χρόνια εμπειρίας στην αιχμή της χειρουργικής, με ηγετικές θέσεις σε κορυφαία νοσοκομεία
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Διευθυντικές Θέσεις</h3>
                    <p className="text-gray-600">
                      Διευθυντής Χειρουργικού Τομέα στη Γενική Κλινική Τίμιος Σταυρός και Επιμελητής ΜΕΘ στο Metropolitan General ΙΑΣΩ
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Διεθνής Συνεργασία</h3>
                    <p className="text-gray-600">
                      Προσωπική συνεργασία με τον διεθνούς φήμης Καθηγητή Καρδιοχειρουργικής Μαγκντί Γιακούμπ
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Πολυετής Εμπειρία</h3>
                    <p className="text-gray-600">
                      Επιστημονικός συνεργάτης: Βιοκλινική, Ερυθρός Σταυρός, Κεντρική Κλινική, Νέο Αθήναιον
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-0">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold text-teal-600 mb-2">30+</div>
                    <div className="text-gray-700 font-medium">Έτη Εμπειρίας</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-0">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold text-cyan-600 mb-2">5K+</div>
                    <div className="text-gray-700 font-medium">Επεμβάσεις</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-teal-100 to-cyan-100 border-0">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold text-teal-700 mb-2">98%</div>
                    <div className="text-gray-700 font-medium">Ικανοποίηση</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-cyan-100 to-teal-100 border-0">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold text-cyan-700 mb-2">24/7</div>
                    <div className="text-gray-700 font-medium">Διαθεσιμότητα</div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center text-teal-700 font-bold">
                      M
                    </div>
                    <div className="w-10 h-10 bg-cyan-200 rounded-full flex items-center justify-center text-cyan-700 font-bold">
                      Γ
                    </div>
                    <div className="w-10 h-10 bg-teal-300 rounded-full flex items-center justify-center text-teal-800 font-bold">
                      E
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-900">500+ Ασθενείς</div>
                    <div className="text-xs text-gray-600">εμπιστεύονται την υγεία τους σε εμάς</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Modern design */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ΜΑΡΤΥΡΙΕΣ ΑΣΘΕΝΩΝ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Η Γνώμη των Ασθενών μας
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Διαβάστε τις εμπειρίες ασθενών που εμπιστεύτηκαν την υγεία τους στα χέρια μας
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Μαρία Παπαδάκη",
                age: "52 ετών",
                procedure: "Λαπαροσκοπική Χολοκυστεκτομή",
                testimonial:
                  "Ο κύριος Κωστογλάνης με βοήθησε να ξεπεράσω το πρόβλημά μου με τη χολή. Η λαπαροσκοπική επέμβαση ήταν απόλυτα επιτυχημένη και η ανάρρωσή μου ήταν πολύ γρήγορη.",
                rating: 5,
                avatar: "ΜΠ"
              },
              {
                name: "Γιάννης Κωνσταντίνου",
                age: "45 ετών",
                procedure: "Επιδιόρθωση Βουβωνοκήλης",
                testimonial:
                  "Εξαιρετικός γιατρός! Με καθησύχασε πριν την επέμβαση και μου εξήγησε όλα τα στάδια. Η χειρουργική επέμβαση πέτυχε απόλυτα.",
                rating: 5,
                avatar: "ΓΚ"
              },
              {
                name: "Ελένη Γεωργίου",
                age: "68 ετών",
                procedure: "Χειρουργική Θυρεοειδούς",
                testimonial:
                  "Ο κύριος Κωστογλάνης είναι ένας εξαιρετικός χειρουργός με μεγάλη εμπειρία. Η επέμβαση στον θυρεοειδή μου έγινε με απόλυτη επιτυχία.",
                rating: 5,
                avatar: "ΕΓ"
              },
            ].map((testimonial, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center">
                        <span className="text-teal-700 font-bold">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.age} • {testimonial.procedure}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-gray-700 leading-relaxed">
                    "{testimonial.testimonial}"
                  </blockquote>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-teal-600 font-medium flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Επιβεβαιωμένος Ασθενής
                      </span>
                      <span className="text-gray-500">Φεβ 2024</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50">
              Περισσότερες Κριτικές
              <Star className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern appointment booking */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Κλείστε το Ραντεβού σας Σήμερα
            </h2>
            <p className="text-xl text-teal-100 mb-12">
              Μην αναβάλλετε την υγεία σας. Επικοινωνήστε μαζί μας για μια εξατομικευμένη συνάντηση
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Τηλέφωνο</h3>
                  <p className="text-teal-100">210 6890123</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Διεύθυνση</h3>
                  <p className="text-teal-100">Παρνασσίδος 59, Χαλάνδρι</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Ωράριο</h3>
                  <p className="text-teal-100">Δευ-Παρ: 9:00-17:00</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 shadow-xl text-lg px-8">
                  <Calendar className="w-5 h-5 mr-2" />
                  Online Ραντεβού
                </Button>
                <Button size="lg" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 text-lg px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Καλέστε Τώρα
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Clean modern design */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/images/kkostoglanis-logo.svg" 
                  alt="Dr. Κωνσταντίνος Κωστογλάνης Logo" 
                  width={48} 
                  height={48}
                  className="w-12 h-12"
                />
                <div>
                  <div className="text-lg font-bold">Δρ. Κωστογλάνης Κωνσταντίνος</div>
                  <div className="text-sm text-gray-400">Γενικός Χειρουργός</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Εμπειρία, εξειδίκευση και ανθρώπινη προσέγγιση για την καλύτερη δυνατή χειρουργική φροντίδα.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Γρήγοροι Σύνδεσμοι</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-teal-400 transition-colors">
                    Σχετικά με εμάς
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-teal-400 transition-colors">
                    Υπηρεσίες
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-teal-400 transition-colors">
                    Συχνές Ερωτήσεις
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-teal-400 transition-colors">
                    Επικοινωνία
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Επικοινωνία</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-teal-500" />
                  Παρνασσίδος 59, Χαλάνδρι
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-teal-500" />
                  210 6890123
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-teal-500" />
                  info@drkostoglanis.gr
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-teal-500" />
                  Δευ-Παρ: 9:00-17:00
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2024 Δρ. Κωστογλάνης Κωνσταντίνος. Όλα τα δικαιώματα διατηρούνται.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-teal-400 transition-colors">
                  Πολιτική Απορρήτου
                </Link>
                <Link href="/terms" className="hover:text-teal-400 transition-colors">
                  Όροι Χρήσης
                </Link>
                <Link href="/sitemap" className="hover:text-teal-400 transition-colors">
                  Χάρτης Ιστοτόπου
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}