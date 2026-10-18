import Image from 'next/image'
import { PortfolioSection } from '@/components/sections/Portfolio'
import { Footer } from '@/components/sections/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Proyectos de maquillaje FX para cine, teatro, fotografía y publicidad.',
}

export default function PortfolioPage() {
  return (
    <>
      <div className="min-h-screen">
        <div className="relative border-b border-ksf-border overflow-hidden min-h-[500px] flex items-center">
          <Image
            src="/portfolio-hero.jpg"
            alt="Portfolio hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-ksf-bg/70" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <p className="font-body text-ksf-accent text-xs tracking-[0.4em] uppercase mb-4">Killer Studio FX</p>
            <h1 className="font-display text-white text-5xl sm:text-7xl tracking-wider mb-6">PORTFOLIO</h1>
            <p className="font-body text-white/70 text-sm max-w-lg leading-relaxed">
              Más de 5 años transformando rostros para cine, teatro y fotografía.
              Cada trabajo, una obra de arte.
            </p>
          </div>
        </div>

        <PortfolioSection />
      </div>
      <Footer />
    </>
  )
}
