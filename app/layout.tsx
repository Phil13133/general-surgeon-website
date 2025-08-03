import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Δρ. Κωστογλάνης Κωνσταντίνος - Γενικός Χειρουργός",
  description:
    "Έμπειρος γενικός χειρουργός με εξειδίκευση σε λαπαροσκοπικές επεμβάσεις και σύγχρονες χειρουργικές τεχνικές. Προσωπική φροντίδα και άριστα αποτελέσματα.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="el">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
