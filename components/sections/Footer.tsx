import Link from 'next/link'
import { ExternalLink, MessageCircle } from 'lucide-react'
import { INSTAGRAM_URL, WHATSAPP_NUMBER, SITE_NAME } from '@/lib/config'

export function Footer() {
  return (
    <footer className="bg-ksf-surface border-t border-ksf-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="lg:col-span-2">
            <h3 className="text-ksf-text font-bold tracking-[0.2em] uppercase text-lg mb-4">
              KILLER STUDIO <span className="text-ksf-accent">FX</span>
            </h3>
            <p className="text-ksf-secondary text-sm leading-relaxed max-w-xs">
              Materiales profesionales para maquillaje de efectos especiales.
              Hecho para los que llevan el arte al extremo.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-ksf-secondary hover:text-ksf-text transition-colors">
                <ExternalLink size={18} />
              </Link>
              <Link href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-ksf-secondary hover:text-[#25D366] transition-colors">
                <MessageCircle size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-ksf-text text-xs tracking-widest uppercase font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              {[
                { href: '/shop', label: 'Todos los productos' },
                { href: '/shop', label: 'New Drop' },
                { href: '/shop', label: 'Best Sellers' },
                { href: '/shop', label: 'Kits & Sets' },
                { href: '/shop', label: 'Pro FX' },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="font-body text-ksf-secondary hover:text-ksf-accent text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-ksf-text text-xs tracking-widest uppercase font-medium mb-4">Info</h4>
            <ul className="space-y-2">
              {[
                { href: '#', label: 'Sobre nosotros' },
                { href: '#', label: 'Envíos' },
                { href: '#', label: 'Devoluciones' },
                { href: '#', label: 'Preguntas frecuentes' },
                { href: `https://wa.me/${WHATSAPP_NUMBER}`, label: 'Contacto', external: true },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="font-body text-ksf-secondary hover:text-ksf-accent text-sm transition-colors"
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ksf-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ksf-secondary text-xs">
            © {new Date().getFullYear()} {SITE_NAME}. Todos los derechos reservados.
          </p>
          <p className="text-ksf-secondary text-xs">
            Powered by Killer Studio FX
          </p>
        </div>
      </div>
    </footer>
  )
}
