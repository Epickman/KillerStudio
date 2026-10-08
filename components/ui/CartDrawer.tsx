'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X, Minus, Plus, Trash2, MessageCircle } from 'lucide-react'
import { useCartStore } from '@/lib/cartStore'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { urlForImage } from '@/sanity/image'

function resolveImage(mainImage: any): string | null {
  if (!mainImage) return null
  if (typeof mainImage === 'string') return mainImage
  try { return urlForImage(mainImage).width(80).height(80).url() } catch { return null }
}

export function CartDrawer() {
  const [mounted, setMounted] = useState(false)
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart, total, itemCount } = useCartStore()

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleWhatsApp = () => {
    const url = getWhatsAppUrl(items)
    window.open(url, '_blank')
  }

  if (!mounted) return null

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 transition-opacity"
          onClick={closeCart}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-ksf-surface border-l border-ksf-border z-50 flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        <div className="flex items-center justify-between p-6 border-b border-ksf-border">
          <div>
            <h2 className="text-ksf-text tracking-widest uppercase text-sm font-medium">Carrito</h2>
            <p className="text-ksf-secondary text-xs mt-0.5">{itemCount()} {itemCount() === 1 ? 'producto' : 'productos'}</p>
          </div>
          <button onClick={closeCart} className="text-ksf-secondary hover:text-ksf-text transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-ksf-secondary text-sm mb-4">Tu carrito está vacío</p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="text-ksf-accent text-xs tracking-widest uppercase hover:underline"
              >
                Ver productos
              </Link>
            </div>
          ) : (
            items.map(item => {
              const imageUrl = resolveImage(item.mainImage)
              return (
                <div key={`${item._id}-${JSON.stringify(item.selectedVariants)}`} className="flex gap-4 border-b border-ksf-border pb-4">
                  <div className="w-20 h-20 bg-ksf-muted flex-shrink-0 overflow-hidden">
                    {imageUrl ? (
                      <Image src={imageUrl} alt={item.name} width={80} height={80} className="object-cover w-full h-full" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-ksf-secondary text-[10px]">FX</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-ksf-text text-sm font-medium line-clamp-1">{item.name}</p>
                    {item.selectedVariants && (
                      <p className="text-ksf-secondary text-xs mt-0.5">
                        {Object.entries(item.selectedVariants).map(([k, v]) => `${k}: ${v}`).join(', ')}
                      </p>
                    )}
                    <p className="text-ksf-accent text-sm font-semibold mt-1">
                      ${(item.price * item.quantity).toLocaleString('es-AR')}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item._id, item.quantity - 1)}
                          className="text-ksf-secondary hover:text-ksf-text p-1 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-ksf-text text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item._id, item.quantity + 1)}
                          className="text-ksf-secondary hover:text-ksf-text p-1 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item._id)}
                        className="text-ksf-secondary hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-ksf-border space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-ksf-secondary text-sm tracking-wide uppercase">Subtotal</span>
              <span className="text-ksf-text font-semibold text-lg">${total().toLocaleString('es-AR')}</span>
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#1da851] text-white py-4 flex items-center justify-center gap-3 tracking-widest uppercase text-sm font-medium transition-colors"
            >
              <MessageCircle size={18} />
              Encargar
            </button>

            <p className="text-ksf-secondary text-xs text-center leading-relaxed">
              Confirmaremos disponibilidad, pago y envío por WhatsApp.
            </p>

            <button
              onClick={clearCart}
              className="w-full text-ksf-secondary hover:text-ksf-text text-xs tracking-widest uppercase transition-colors py-2"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  )
}
