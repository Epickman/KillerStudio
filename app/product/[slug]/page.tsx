'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, MessageCircle, ChevronLeft, Minus, Plus } from 'lucide-react'
import { notFound } from 'next/navigation'
import { demoProducts } from '@/lib/demoData'
import { useCartStore } from '@/lib/cartStore'
import { ProductCard } from '@/components/ui/ProductCard'
import { Footer } from '@/components/sections/Footer'

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = demoProducts.find(p => p.slug.current === params.slug)
  if (!product) notFound()

  const [quantity, setQuantity] = useState(1)
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({})
  const [activeTab, setActiveTab] = useState<'description' | 'howTo' | 'techInfo'>('description')
  const addItem = useCartStore(state => state.addItem)

  const handleAddToCart = () => {
    addItem({
      _id: product._id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      mainImage: product.mainImage,
      quantity,
      selectedVariants: Object.keys(selectedVariants).length > 0 ? selectedVariants : undefined,
    })
  }

  const relatedProducts = demoProducts.filter(p => p._id !== product._id).slice(0, 4)

  const discount = product.previousPrice
    ? Math.round((1 - product.price / product.previousPrice) * 100)
    : null

  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/shop" className="inline-flex items-center gap-2 text-ksf-secondary hover:text-ksf-text text-xs tracking-widest uppercase transition-colors">
            <ChevronLeft size={14} />
            Volver al shop
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            <div className="space-y-3">
              <div className="aspect-square bg-ksf-surface border border-ksf-border overflow-hidden">
                {typeof product.mainImage === 'string' && product.mainImage ? (
                  <Image src={product.mainImage} alt={product.name} width={600} height={600} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ksf-muted to-ksf-surface">
                    <span className="text-ksf-secondary text-2xl tracking-widest uppercase font-bold">FX</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-2 mb-4">
                {product.isNew && (
                  <span className="bg-ksf-accent text-white text-[10px] tracking-widest uppercase px-2 py-1">NEW</span>
                )}
                {product.isOnSale && discount && (
                  <span className="bg-ksf-gold text-black text-[10px] tracking-widest uppercase px-2 py-1">-{discount}%</span>
                )}
              </div>

              <h1 className="text-ksf-text text-3xl sm:text-4xl font-bold tracking-tight mb-2">{product.name}</h1>

              {product.shortDescription && (
                <p className="text-ksf-secondary text-sm leading-relaxed mb-6">{product.shortDescription}</p>
              )}

              <div className="flex items-center gap-4 mb-8">
                <span className="text-ksf-text text-3xl font-bold">${product.price.toLocaleString('es-AR')}</span>
                {product.previousPrice && (
                  <span className="text-ksf-secondary text-lg line-through">${product.previousPrice.toLocaleString('es-AR')}</span>
                )}
              </div>

              {product.variants?.map(variant => (
                <div key={variant.name} className="mb-6">
                  <p className="text-ksf-text text-xs tracking-widest uppercase mb-3">{variant.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {variant.options.map(option => (
                      <button
                        key={option}
                        onClick={() => setSelectedVariants(prev => ({ ...prev, [variant.name]: option }))}
                        className={`px-4 py-2 text-xs tracking-wide border transition-colors ${
                          selectedVariants[variant.name] === option
                            ? 'border-ksf-accent bg-ksf-accent text-white'
                            : 'border-ksf-border text-ksf-secondary hover:border-ksf-text hover:text-ksf-text'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {product.stock !== undefined && (
                <p className={`text-xs tracking-wide mb-6 ${product.stock > 5 ? 'text-green-400' : product.stock > 0 ? 'text-yellow-400' : 'text-red-400'}`}>
                  {product.stock > 5 ? 'En stock' : product.stock > 0 ? `Últimas ${product.stock} unidades` : 'Sin stock'}
                </p>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-ksf-border">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="p-3 text-ksf-secondary hover:text-ksf-text transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-4 text-ksf-text text-sm w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="p-3 text-ksf-secondary hover:text-ksf-text transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="flex gap-3 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 bg-ksf-accent hover:bg-ksf-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 flex items-center justify-center gap-3 text-sm tracking-widest uppercase font-medium transition-colors"
                >
                  <ShoppingBag size={16} />
                  Agregar al carrito
                </button>
              </div>

              <div className="border-t border-ksf-border pt-6">
                <p className="text-ksf-secondary text-xs leading-relaxed flex items-start gap-2">
                  <MessageCircle size={14} className="mt-0.5 text-[#25D366] flex-shrink-0" />
                  Consultá por disponibilidad y envío por WhatsApp
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="flex border-b border-ksf-border">
              {[
                { key: 'description', label: 'Descripción' },
                { key: 'howTo', label: 'Modo de uso' },
                { key: 'techInfo', label: 'Info técnica' },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as 'description' | 'howTo' | 'techInfo')}
                  className={`px-6 py-4 text-xs tracking-widest uppercase transition-colors border-b-2 -mb-px ${
                    activeTab === tab.key
                      ? 'border-ksf-accent text-ksf-text'
                      : 'border-transparent text-ksf-secondary hover:text-ksf-text'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="py-8 text-ksf-secondary text-sm leading-relaxed">
              {activeTab === 'description' && <p>{product.shortDescription || 'Sin descripción disponible.'}</p>}
              {activeTab === 'howTo' && <p>Información sobre el modo de uso disponible próximamente.</p>}
              {activeTab === 'techInfo' && <p>Información técnica disponible próximamente.</p>}
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-ksf-text text-2xl font-bold tracking-tight mb-8">También te puede interesar</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {relatedProducts.map(p => <ProductCard key={p._id} product={p} />)}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
