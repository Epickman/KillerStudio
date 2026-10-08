'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react'
import { Product } from '@/types'
import { useCartStore } from '@/lib/cartStore'

interface ProductBannerProps {
  products: Product[]
  title?: string
  accent?: boolean
}

export function ProductBanner({ products, title, accent = false }: ProductBannerProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const addItem = useCartStore(state => state.addItem)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
  }

  return (
    <section className={`py-16 ${accent ? 'bg-ksf-surface border-y border-ksf-border' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-ksf-text text-3xl sm:text-5xl tracking-wider">{title}</h2>
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="p-2 border border-ksf-border text-ksf-secondary hover:border-ksf-accent hover:text-ksf-accent transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2 border border-ksf-border text-ksf-secondary hover:border-ksf-accent hover:text-ksf-accent transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map(product => {
            const discount = product.previousPrice
              ? Math.round((1 - product.price / product.previousPrice) * 100)
              : null

            const imageUrl = typeof product.mainImage === 'string'
              ? product.mainImage
              : `https://picsum.photos/seed/${product._id}/300/400`

            return (
              <div key={product._id} className="flex-none w-52 sm:w-64 group">
                <Link href={`/product/${product.slug.current}`}>
                  <div className="relative aspect-[3/4] bg-ksf-surface border border-ksf-border overflow-hidden mb-3 transition-all duration-300 group-hover:border-ksf-accent/60">
                    <div
                      className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {product.isNew && (
                        <span className="font-body bg-ksf-accent text-white text-[9px] tracking-widest uppercase px-2 py-0.5">NEW</span>
                      )}
                      {discount && (
                        <span className="font-body bg-ksf-gold text-black text-[9px] tracking-widest uppercase px-2 py-0.5">-{discount}%</span>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        addItem({ _id: product._id, name: product.name, slug: product.slug, price: product.price, mainImage: product.mainImage, quantity: 1 })
                      }}
                      className="absolute bottom-3 left-3 right-3 bg-ksf-accent text-white py-2 text-[10px] tracking-widest uppercase font-body flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <ShoppingBag size={12} />
                      Agregar
                    </button>
                  </div>

                  <div>
                    <p className="font-body text-ksf-text text-sm font-medium line-clamp-1 mb-1">{product.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="font-body text-ksf-accent text-sm font-semibold">${product.price.toLocaleString('es-AR')}</span>
                      {product.previousPrice && (
                        <span className="font-body text-ksf-secondary text-xs line-through">${product.previousPrice.toLocaleString('es-AR')}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
