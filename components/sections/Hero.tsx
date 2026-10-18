'use client'
import Link from 'next/link'
import { FilmStrip } from '@/components/ui/FilmStrip'
import { ProjectionEffect } from '@/components/ui/ProjectionEffect'
import { FilmFlicker } from '@/components/ui/FilmFlicker'

export function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-ksf-bg grain isolate pt-52 pb-36 sm:pt-24 sm:pb-8"
      style={{ minHeight: '100vh' }}
    >
      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0a12] via-[#120f1a] to-[#0a0812]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(232,23,122,0.13),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(13,10,18,0.9))]" />
      </div>

      {/* Proyección vintage */}
      <ProjectionEffect />

      {/* Parpadeo — solo entre las dos cintas */}
      <FilmFlicker
        className="left-0 right-0"
        style={{ top: 220, bottom: 124 }}
      />

      {/* Cintas de película — debajo del header y en el fondo */}
      <FilmStrip direction="left" className="top-24" />
      <FilmStrip direction="left" className="bottom-0" />



      {/* Contenido central */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 pb-8 pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Columna izquierda — título */}
          <div className="text-center lg:text-left">

<p className="font-body text-ksf-accent text-[10px] tracking-[0.5em] uppercase mb-5 flicker">
              ✦ Special Effects Makeup ✦
            </p>

            <h1 className="font-display leading-[0.88] mb-0">
              <span
                className="block text-[clamp(3.5rem,10vw,8rem)] text-ksf-text"
                style={{ textShadow: '0 0 60px rgba(232,23,122,0.15)' }}
              >
                KILLER
              </span>
              <span className="block text-[clamp(3.5rem,10vw,8rem)] text-ksf-text">
                STUDIO
              </span>
              <span
                className="block text-[clamp(3.5rem,10vw,8rem)] text-ksf-accent"
                style={{ textShadow: '0 0 60px rgba(232,23,122,0.6), 0 0 120px rgba(232,23,122,0.2)' }}
              >
                FX
              </span>
            </h1>
          </div>

          {/* Columna derecha — Info + CTAs */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <p className="font-body text-ksf-secondary text-base sm:text-lg leading-relaxed font-light text-center lg:text-left max-w-sm">
              Materiales profesionales para efectos especiales cinematográficos.
              Para maquilladores que no conocen límites.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/shop"
                className="font-display bg-ksf-accent hover:bg-ksf-accent-hover text-white px-10 py-4 text-xl tracking-[0.15em] transition-all duration-200 hover:shadow-[0_0_40px_rgba(232,23,122,0.55)] text-center"
              >
                SHOP FX
              </Link>
              <Link
                href="/portfolio"
                className="font-body border border-ksf-border text-ksf-secondary hover:border-ksf-accent hover:text-ksf-accent px-10 py-4 text-sm tracking-[0.25em] uppercase font-medium transition-all duration-200 text-center"
              >
                Ver Portfolio
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full border-t border-ksf-border pt-6">
              {[
                { v: '200+', l: 'Producciones' },
                { v: '15 años', l: 'Experiencia' },
                { v: '100%', l: 'Pro Grade' },
              ].map(s => (
                <div key={s.l} className="text-center lg:text-left">
                  <p className="font-display text-ksf-accent text-2xl sm:text-3xl" style={{ textShadow: '0 0 15px rgba(232,23,122,0.4)' }}>
                    {s.v}
                  </p>
                  <p className="font-body text-ksf-secondary text-[10px] tracking-widest uppercase mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <span className="font-body text-ksf-secondary/40 text-[9px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ksf-accent/60 to-transparent animate-bounce" />
      </div>
    </section>
  )
}
