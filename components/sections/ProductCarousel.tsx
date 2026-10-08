'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react'
import { Product } from '@/types'
import { useCartStore } from '@/lib/cartStore'

interface ProductCarouselProps {
  products: Product[]
  title?: string
  autoplay?: boolean
}

export function ProductCarousel({ products, title = 'DESTACADOS', autoplay = true }: ProductCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const addItem = useCartStore(state => state.addItem)

  const go = useCallback((idx: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent((idx + products.length) % products.length)
    setTimeout(() => setIsTransitioning(false), 400)
  }, [isTransitioning, products.length])

  const next = useCallback(() => go(current + 1), [current, go])
  const prev = useCallback(() => go(current - 1), [current, go])

  useEffect(() => {
    if (!autoplay || products.length < 2) return
    const timer = setInterval(next, 4500)
    return () => clearInterval(timer)
  }, [autoplay, next, products.length])

  if (!products.length) return null

  const product = products[current]
  const imageUrl = typeof product.mainImage === 'string'
    ? product.mainImage
    : `https://picsum.photos/seed/${product._id}/800/500`

  const discount = product.previousPrice
    ? Math.round((1 - product.price / product.previousPrice) * 100)
    : null

  return (
    <section className="relative w-full overflow-hidden grain isolate">
      {/* Slide */}
      <div
        className={`relative w-full transition-opacity duration-400 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{ height: 'clamp(380px, 55vw, 620px)' }}
      >
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-ksf-bg via-ksf-bg/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ksf-bg/80 via-transparent to-ksf-bg/20" />
        {/* Scanlines */}
        <div className="absolute inset-0 scanlines opacity-60" />
        {/* Vignette roja */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(232,23,122,0.08),transparent_60%)]" />

        {/* Contenido */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              {/* Badges */}
              <div className="flex gap-2 mb-5">
                {product.isNew && (
                  <span className="font-body bg-ksf-accent text-white text-[10px] tracking-widest uppercase px-3 py-1">NEW</span>
                )}
                {discount && (
                  <span className="font-body bg-ksf-gold text-black text-[10px] tracking-widest uppercase px-3 py-1">-{discount}%</span>
                )}
                <span className="font-body border border-ksf-border text-ksf-secondary text-[10px] tracking-widest uppercase px-3 py-1">
                  {title}
                </span>
              </div>

              <h2
                className="font-display text-ksf-text leading-none mb-3"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
              >
                {product.name}
              </h2>

              {product.shortDescription && (
                <p className="font-body text-ksf-secondary text-sm sm:text-base leading-relaxed mb-6 max-w-sm">
                  {product.shortDescription}
                </p>
              )}

              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-display text-ksf-accent text-4xl" style={{ textShadow: '0 0 20px rgba(232,23,122,0.4)' }}>
                  ${product.price.toLocaleString('es-AR')}
                </span>
                {product.previousPrice && (
                  <span className="font-body text-ksf-secondary text-lg line-through">
                    ${product.previousPrice.toLocaleString('es-AR')}
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                <Link
                  href={`/product/${product.slug.current}`}
                  className="font-display bg-ksf-accent hover:bg-ksf-accent-hover text-white px-8 py-3 text-lg tracking-wider transition-all hover:shadow-[0_0_30px_rgba(232,23,122,0.5)]"
                >
                  VER PRODUCTO
                </Link>
                <button
                  onClick={() => addItem({
                    _id: product._id,
                    name: product.name,
                    slug: product.slug,
                    price: product.price,
                    mainImage: product.mainImage,
                    quantity: 1,
                  })}
                  className="border border-ksf-border text-ksf-secondary hover:border-ksf-accent hover:text-ksf-accent p-3 transition-all"
                  title="Agregar al carrito"
                >
                  <ShoppingBag size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controles */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-ksf-bg/60 hover:bg-ksf-accent/80 border border-ksf-border hover:border-ksf-accent text-ksf-secondary hover:text-white p-3 transition-all duration-200"
        aria-label="Anterior"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-ksf-bg/60 hover:bg-ksf-accent/80 border border-ksf-border hover:border-ksf-accent text-ksf-secondary hover:text-white p-3 transition-all duration-200"
        aria-label="Siguiente"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots + miniaturas */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {products.map((p, i) => (
          <button
            key={p._id}
            onClick={() => go(i)}
            className={`transition-all duration-300 rounded-none ${
              i === current
                ? 'w-8 h-1.5 bg-ksf-accent'
                : 'w-1.5 h-1.5 bg-ksf-border hover:bg-ksf-secondary'
            }`}
            aria-label={`Ir a ${p.name}`}
          />
        ))}
      </div>

      {/* Contador estilo film */}
      <div className="absolute top-4 right-4 z-20 font-mono text-[10px] text-ksf-accent/40 tracking-widest">
        {String(current + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
      </div>
    </section>
  )
}
