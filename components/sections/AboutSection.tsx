'use client'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/lib/config'

const skills = [
  { label: 'Maquillaje FX / Gore', years: '8+' },
  { label: 'Prótesis en espuma y silicona', years: '6+' },
  { label: 'Maquillaje de envejecimiento', years: '5+' },
  { label: 'Dirección de arte', years: '4+' },
  { label: 'Maquillaje teatral', years: '7+' },
]

const stats = [
  { value: '200+', label: 'Producciones' },
  { value: '8', label: 'Años de exp.' },
  { value: '15+', label: 'Premios' },
  { value: '3', label: 'Países' },
]

export function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden grain isolate">
      {/* Fondo con gradiente lateral */}
      <div className="absolute inset-0 bg-ksf-surface" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_50%,rgba(232,23,122,0.08),transparent)]" />

      {/* Número decorativo de fondo */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[clamp(12rem,30vw,22rem)] leading-none select-none pointer-events-none"
        style={{ color: 'rgba(232,23,122,0.04)', letterSpacing: '-0.05em' }}
        aria-hidden
      >
        FX
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Imagen */}
          <div className="relative">
            {/* Marco decorativo */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-ksf-accent/60" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-ksf-accent/60" />

            <div className="relative aspect-[3/4] overflow-hidden border border-ksf-border horror-img">
              {/* Placeholder de foto — reemplazar con foto real */}
              <div
                className="w-full h-full bg-cover bg-center scanlines"
                style={{ backgroundImage: 'url(https://picsum.photos/seed/artist-ksf/500/700)' }}
              />
              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-ksf-surface/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(13,10,18,0.6))]" />

              {/* Etiqueta de film */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-ksf-accent/80">
                  ▶ KILLER STUDIO FX
                </span>
              </div>

              {/* Frame counter estilo cine */}
              <div className="absolute bottom-4 right-4 font-mono text-[10px] text-ksf-accent/50 tracking-widest">
                01 / 001
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div>
            <p className="font-body text-ksf-accent text-xs tracking-[0.4em] uppercase mb-4 flicker">
              ✦ Sobre mí
            </p>

            <h2 className="font-display text-ksf-text text-4xl sm:text-6xl tracking-wider mb-6 leading-none">
              QUIÉN<br />
              <span className="text-ksf-accent" style={{ textShadow: '0 0 40px rgba(232,23,122,0.4)' }}>
                SOY
              </span>
            </h2>

            <div className="space-y-4 font-body text-ksf-secondary text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Soy maquilladora especializada en efectos especiales (FX) con más de 8 años
                transformando rostros para producciones cinematográficas, series, teatro y fotografía.
              </p>
              <p>
                Mi trabajo combina técnicas clásicas de Hollywood con materiales de última generación:
                desde prótesis en silicona platinada hasta sangre artificial formulada para pantalla.
              </p>
              <p>
                Cada proyecto es una obra única. Killer Studio FX nació para llevar esa visión
                a más artistas: productos profesionales con la estética que el arte merece.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-2 mb-10">
              {skills.map(skill => (
                <div key={skill.label} className="flex items-center gap-4">
                  <div className="flex-1 bg-ksf-border h-px relative">
                    <div className="absolute left-0 top-0 h-full bg-ksf-accent/60 w-4/5" />
                  </div>
                  <span className="font-body text-ksf-text text-xs tracking-wide min-w-fit">{skill.label}</span>
                  <span className="font-display text-ksf-accent text-sm">{skill.years}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mb-10 border-t border-ksf-border pt-8">
              {stats.map(stat => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-ksf-accent text-3xl sm:text-4xl" style={{ textShadow: '0 0 20px rgba(232,23,122,0.5)' }}>
                    {stat.value}
                  </p>
                  <p className="font-body text-ksf-secondary text-[10px] tracking-widest uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="font-display bg-ksf-accent hover:bg-ksf-accent-hover text-white px-8 py-3 text-lg tracking-wider transition-all hover:shadow-[0_0_30px_rgba(232,23,122,0.5)]"
              >
                VER PORTFOLIO
              </Link>
              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body border border-ksf-border text-ksf-secondary hover:border-ksf-accent hover:text-ksf-accent px-8 py-3 text-sm tracking-widest uppercase transition-all flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
