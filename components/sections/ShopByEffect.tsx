import Link from 'next/link'

const effects = [
  { name: 'Sangre & Gore', description: 'Sangre artificial, heridas y efectos de trauma', href: '/shop?tag=sangre', glow: 'rgba(232,23,122,0.15)' },
  { name: 'Quemaduras', description: 'Efectos de quemaduras y lesiones de calor', href: '/shop?tag=quemaduras', glow: 'rgba(200,80,20,0.12)' },
  { name: 'Prótesis', description: 'Látex, espuma y materiales para prótesis', href: '/shop?tag=protesis', glow: 'rgba(140,50,200,0.12)' },
  { name: 'Envejecimiento', description: 'Arrugas, manchas y cambios de edad', href: '/shop?tag=envejecimiento', glow: 'rgba(180,140,40,0.12)' },
  { name: 'Heridas', description: 'Cicatrices, cortes y abrasiones', href: '/shop?tag=heridas', glow: 'rgba(232,23,122,0.10)' },
  { name: 'Teatral', description: 'Colores intensos y paletas de escenario', href: '/shop?tag=teatral', glow: 'rgba(30,100,200,0.12)' },
]

export function ShopByEffect() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="font-body text-ksf-accent text-xs tracking-[0.4em] uppercase mb-3">Explorar por técnica</p>
        <h2 className="font-display text-ksf-text text-4xl sm:text-5xl tracking-wider">SHOP BY EFFECT</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {effects.map((effect, i) => (
          <Link
            key={effect.name}
            href={effect.href}
            className="group relative p-8 border border-ksf-border bg-ksf-surface hover:border-ksf-accent/60 transition-all duration-300 overflow-hidden grain isolate"
          >
            {/* Glow de fondo */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ background: `radial-gradient(ellipse at 50% 100%, ${effect.glow}, transparent 70%)` }}
            />

            {/* Número */}
            <div
              className="absolute top-4 right-5 font-display text-[4rem] leading-none select-none opacity-5 group-hover:opacity-10 transition-opacity duration-300"
              style={{ color: '#e8177a' }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>

            <div className="relative z-10">
              {/* Línea accent */}
              <div className="w-8 h-0.5 bg-ksf-accent/40 mb-5 group-hover:w-12 group-hover:bg-ksf-accent transition-all duration-300" />
              <h3 className="font-display text-ksf-text text-2xl sm:text-3xl tracking-wide mb-2 group-hover:text-ksf-accent transition-colors duration-300">
                {effect.name}
              </h3>
              <p className="font-body text-ksf-secondary text-sm leading-relaxed mb-5">{effect.description}</p>
              <span className="font-body inline-flex items-center gap-1 text-ksf-accent text-xs tracking-widest uppercase group-hover:gap-2 transition-all duration-200">
                Explorar <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
