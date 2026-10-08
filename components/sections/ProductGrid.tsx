import Link from 'next/link'
import { Product } from '@/types'
import { ProductCard } from '@/components/ui/ProductCard'

interface ProductGridProps {
  products: Product[]
  title: string
  subtitle?: string
  viewAllHref?: string
}

export function ProductGrid({ products, title, subtitle, viewAllHref }: ProductGridProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          {subtitle && <p className="font-body text-ksf-accent text-xs tracking-[0.3em] uppercase mb-3">{subtitle}</p>}
          <h2 className="font-display text-ksf-text text-4xl sm:text-6xl tracking-wider">{title}</h2>
        </div>
        {viewAllHref && (
          <Link href={viewAllHref} className="font-body text-ksf-secondary hover:text-ksf-accent text-xs tracking-widest uppercase transition-colors hidden sm:block">
            Ver todo →
          </Link>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {viewAllHref && (
        <div className="mt-10 text-center sm:hidden">
          <Link href={viewAllHref} className="text-ksf-secondary hover:text-ksf-text text-xs tracking-widest uppercase transition-colors">
            Ver todo →
          </Link>
        </div>
      )}
    </section>
  )
}
