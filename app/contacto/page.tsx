import type { Metadata } from 'next'
import { ContactSection } from '@/components/sections/ContactSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contactate con Killer Studio FX. WhatsApp, Instagram y más.',
}

export default function ContactoPage() {
  return (
    <>
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  )
}
