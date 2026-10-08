'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem } from '@/types'

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
  total: () => number
  itemCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (newItem) => {
        const items = get().items
        const existing = items.find(
          i => i._id === newItem._id &&
          JSON.stringify(i.selectedVariants) === JSON.stringify(newItem.selectedVariants)
        )
        if (existing) {
          set({
            items: items.map(i =>
              i._id === newItem._id ? { ...i, quantity: i.quantity + newItem.quantity } : i
            ),
          })
        } else {
          set({ items: [...items, newItem] })
        }
        set({ isOpen: true })
      },
      removeItem: (id) => set({ items: get().items.filter(i => i._id !== id) }),
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id)
          return
        }
        set({ items: get().items.map(i => i._id === id ? { ...i, quantity } : i) })
      },
      clearCart: () => set({ items: [] }),
      toggleCart: () => set({ isOpen: !get().isOpen }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      total: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      itemCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
    }),
    { name: 'ksf-cart' }
  )
)
