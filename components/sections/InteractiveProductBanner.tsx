'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { ShoppingBag, Eye, ArrowRight } from 'lucide-react'
import { Product } from '@/types'
import { useCartStore } from '@/lib/cartStore'
import { urlForImage } from '@/sanity/image'
import { useRouter } from 'next/navigation'

interface InteractiveProductBannerProps {
  products: Product[]
}

export function InteractiveProductBanner({ products }: InteractiveProductBannerProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const addItem = useCartStore(state => state.addItem)
  const router = useRouter()
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollStart = useRef(0)
  const dragDistance = useRef(0)

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    isDragging.current = true
    dragDistance.current = 0
    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollStart.current = scrollRef.current.scrollLeft
    scrollRef.current.style.cursor = 'grabbing'
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.2
    dragDistance.current = Math.abs(walk)
    scrollRef.current.scrollLeft = scrollStart.current - walk
  }

  const onMouseUp = () => {
    isDragging.current = false
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab'
  }

  const onClickCapture = (e: React.MouseEvent) => {
    if (dragDistance.current > 8) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="font-body text-ksf-accent text-xs tracking-[0.4em] uppercase mb-3">Productos destacados</p>
          <h2 className="font-display text-ksf-text text-4xl sm:text-6xl tracking-wider leading-none">TIENDA</h2>
        </div>
        <Link
          href="/shop"
          className="font-body text-ksf-secondary hover:text-ksf-accent text-xs tracking-widest uppercase transition-colors hidden sm:block"
        >
          Ver todo →
        </Link>
      </div>

      {/* Scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', cursor: 'grab' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onClickCapture={onClickCapture}
      >
        {products.map((product) => {
          const imageUrl = product.mainImage
            ? typeof product.mainImage === 'string'
              ? product.mainImage
              : urlForImage(product.mainImage).width(400).height(400).url()
            : `https://picsum.photos/seed/${product._id}/400/400`

          return (
            <div key={product._id} className="flex-none w-44 sm:w-56 group">
              <Link href={`/product/${product.slug.current}`}>
                <div className="relative bg-ksf-surface border border-ksf-border overflow-hidden transition-all duration-300 hover:border-ksf-accent/60 hover:shadow-[0_0_30px_rgba(232,23,122,0.1)]">
                  <div className="relative aspect-square overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${imageUrl})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {product.isNew && (
                        <span className="font-body bg-ksf-accent text-white text-[9px] tracking-widest uppercase px-2 py-1">NEW</span>
                      )}
                      {product.isOnSale && product.previousPrice && (
                        <span className="font-body bg-ksf-gold text-black text-[9px] tracking-widest uppercase px-2 py-1">SALE</span>
                      )}
                    </div>

                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          addItem({ _id: product._id, name: product.name, slug: product.slug, price: product.price, mainImage: product.mainImage, quantity: 1 })
                        }}
                        className="bg-ksf-accent hover:bg-ksf-accent-hover text-white p-3 transition-colors"
                      >
                        <ShoppingBag size={18} />
                      </button>
                      <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); router.push(`/product/${product.slug.current}`) }}
                        className="bg-white/10 hover:bg-white/20 text-white p-3 transition-colors"
                      >
                        <Eye size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="font-body text-ksf-secondary text-[10px] tracking-widest uppercase mb-1">
                      {product.category?.name || 'FX'}
                    </p>
                    <h3 className="font-body text-ksf-text text-sm font-medium tracking-wide mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="font-body text-ksf-accent font-semibold text-sm">
                        ${product.price.toLocaleString('es-AR')}
                      </span>
                      {product.previousPrice && (
                        <span className="font-body text-ksf-secondary text-xs line-through">
                          ${product.previousPrice.toLocaleString('es-AR')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}

        {/* CTA card */}
        <div className="flex-none w-44 sm:w-56">
          <Link
            href="/shop"
            className="group flex flex-col items-center justify-center aspect-square border border-ksf-border bg-ksf-surface hover:border-ksf-accent/60 transition-all duration-300 gap-3"
          >
            <ArrowRight size={24} className="text-ksf-accent group-hover:translate-x-1 transition-transform duration-200" />
            <span className="font-body text-[10px] tracking-widest uppercase text-ksf-secondary group-hover:text-ksf-accent transition-colors text-center">
              Ver todo
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
