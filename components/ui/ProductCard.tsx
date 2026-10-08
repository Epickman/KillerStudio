'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ShoppingBag, Eye } from 'lucide-react'
import { Product } from '@/types'
import { useCartStore } from '@/lib/cartStore'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const addItem = useCartStore(state => state.addItem)
  const router = useRouter()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      _id: product._id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      mainImage: product.mainImage,
      quantity: 1,
    })
  }

  const imageUrl = typeof product.mainImage === 'string'
    ? product.mainImage
    : `https://picsum.photos/seed/${product._id}/400/400`

  return (
    <Link href={`/product/${product.slug.current}`}>
      <div
        className="group relative bg-ksf-surface border border-ksf-border overflow-hidden transition-all duration-300 hover:border-ksf-accent/60 hover:shadow-[0_0_30px_rgba(232,23,122,0.1)]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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

          <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={handleAddToCart}
              className="bg-ksf-accent hover:bg-ksf-accent-hover text-white p-3 transition-colors"
              title="Agregar al carrito"
            >
              <ShoppingBag size={18} />
            </button>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); router.push(`/product/${product.slug.current}`) }}
              className="bg-white/10 hover:bg-white/20 text-white p-3 transition-colors"
              title="Ver producto"
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
  )
}
