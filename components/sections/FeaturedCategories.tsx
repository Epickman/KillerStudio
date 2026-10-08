import Link from 'next/link'
import { demoCategories } from '@/lib/demoData'

export function FeaturedCategories() {
  const categories = demoCategories.slice(0, 6)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="font-body text-ksf-accent text-xs tracking-[0.4em] uppercase mb-3">Explorar</p>
          <h2 className="font-display text-ksf-text text-4xl sm:text-5xl tracking-wider">CATEGORÍAS</h2>
        </div>
        <Link href="/shop" className="font-body text-ksf-secondary hover:text-ksf-accent text-xs tracking-widest uppercase transition-colors hidden sm:block">
          Ver todo →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {categories.map((cat, i) => (
          <Link
            key={cat._id}
            href={`/shop?category=${cat.slug.current}`}
            className="group relative aspect-[3/4] bg-ksf-surface border border-ksf-border overflow-hidden hover:border-ksf-accent/60 transition-all duration-300 grain isolate"
          >
            {/* Fondo degradado único por categoría */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                background: `radial-gradient(ellipse at 50% 80%, rgba(232,23,122,${0.06 + i * 0.03}), transparent 70%)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ksf-bg/90 via-ksf-surface/40 to-transparent group-hover:from-ksf-accent/20 transition-colors duration-300" />

            {/* Número decorativo */}
            <div
              className="absolute top-2 right-3 font-display text-[3rem] leading-none select-none opacity-5 group-hover:opacity-10 transition-opacity"
              style={{ color: '#e8177a' }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-end p-4">
              {/* Línea decorativa */}
              <div className="w-6 h-px bg-ksf-accent/40 mb-3 group-hover:w-10 transition-all duration-300" />
              <p className="font-body text-ksf-text text-[11px] tracking-widest uppercase text-center font-medium leading-tight group-hover:text-ksf-accent transition-colors duration-300">
                {cat.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
