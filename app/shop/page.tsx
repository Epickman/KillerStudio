'use client'
import { useState, useMemo, Suspense } from 'react'
import { Search, X } from 'lucide-react'
import { ProductCard } from '@/components/ui/ProductCard'
import { Footer } from '@/components/sections/Footer'
import { demoProducts, demoCategories } from '@/lib/demoData'
import { useSearchParams } from 'next/navigation'

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'newest'

function ShopContent() {
  const searchParams = useSearchParams()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [sortBy, setSortBy] = useState<SortOption>('default')

  const filtered = useMemo(() => {
    let products = [...demoProducts]

    if (search) {
      const q = search.toLowerCase()
      products = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription?.toLowerCase().includes(q) ||
        p.tags?.some(t => t.toLowerCase().includes(q))
      )
    }

    if (selectedCategory !== 'all') {
      products = products.filter(p => p.tags?.some(t => t.includes(selectedCategory)))
    }

    switch (sortBy) {
      case 'price-asc': products.sort((a, b) => a.price - b.price); break
      case 'price-desc': products.sort((a, b) => b.price - a.price); break
      case 'newest': products = products.filter(p => p.isNew).concat(products.filter(p => !p.isNew)); break
    }

    return products
  }, [search, selectedCategory, sortBy])

  return (
    <>
      <div className="min-h-screen">
        <div className="bg-ksf-surface border-b border-ksf-border py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-ksf-accent text-xs tracking-[0.3em] uppercase mb-3">Catálogo</p>
            <h1 className="text-ksf-text text-4xl sm:text-5xl font-bold tracking-tight">Shop FX</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ksf-secondary" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-ksf-surface border border-ksf-border text-ksf-text placeholder:text-ksf-secondary pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-ksf-accent transition-colors"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-ksf-secondary hover:text-ksf-text">
                  <X size={14} />
                </button>
              )}
            </div>

            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as SortOption)}
              className="bg-ksf-surface border border-ksf-border text-ksf-text px-4 py-3 text-sm focus:outline-none focus:border-ksf-accent transition-colors appearance-none cursor-pointer"
            >
              <option value="default">Ordenar por</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
              <option value="newest">Más nuevos</option>
            </select>
          </div>

          <div className="flex gap-2 flex-wrap mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs tracking-widest uppercase transition-colors border ${
                selectedCategory === 'all'
                  ? 'bg-ksf-accent text-white border-ksf-accent'
                  : 'border-ksf-border text-ksf-secondary hover:text-ksf-text hover:border-ksf-text'
              }`}
            >
              Todo
            </button>
            {demoCategories.map(cat => (
              <button
                key={cat._id}
                onClick={() => setSelectedCategory(cat.slug.current)}
                className={`px-4 py-2 text-xs tracking-widest uppercase transition-colors border ${
                  selectedCategory === cat.slug.current
                    ? 'bg-ksf-accent text-white border-ksf-accent'
                    : 'border-ksf-border text-ksf-secondary hover:text-ksf-text hover:border-ksf-text'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <p className="text-ksf-secondary text-xs mb-6">{filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}</p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filtered.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-ksf-secondary text-sm mb-2">No se encontraron productos</p>
              <button
                onClick={() => { setSearch(''); setSelectedCategory('all') }}
                className="text-ksf-accent text-xs tracking-widest uppercase hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default function ShopPage() {
  return (
    <Suspense>
      <ShopContent />
    </Suspense>
  )
}
