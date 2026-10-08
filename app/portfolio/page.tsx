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
        <div className="bg-ksf-surface border-b border-ksf-border py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-body text-ksf-accent text-xs tracking-[0.4em] uppercase mb-4">Killer Studio FX</p>
            <h1 className="font-display text-ksf-text text-5xl sm:text-7xl tracking-wider mb-4">PORTFOLIO</h1>
            <p className="font-body text-ksf-secondary text-sm max-w-lg leading-relaxed">
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
