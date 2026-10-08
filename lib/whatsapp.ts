import { CartItem } from '@/types'
import { WHATSAPP_NUMBER } from './config'

export function generateWhatsAppMessage(items: CartItem[]): string {
  const lines = items.map(item => {
    const variant = item.selectedVariants
      ? ` (${Object.values(item.selectedVariants).join(', ')})`
      : ''
    return `• ${item.name}${variant} x ${item.quantity} — $${(item.price * item.quantity).toLocaleString('es-AR')}`
  })

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const message = `Hola Killer Studio FX! Quiero realizar el siguiente pedido:\n\n${lines.join('\n')}\n\nSubtotal: $${subtotal.toLocaleString('es-AR')}\n\nQuisiera consultar disponibilidad y coordinar el pago/envío.`

  return message
}

export function getWhatsAppUrl(items: CartItem[]): string {
  const message = generateWhatsAppMessage(items)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
