import Link from 'next/link'
import { MessageCircle, ExternalLink, ArrowRight } from 'lucide-react'
import { WHATSAPP_NUMBER, INSTAGRAM_URL } from '@/lib/config'

export function ContactSection() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Killer%20Studio%20FX!%20Quiero%20consultar%20sobre%20`

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div>
          <p className="font-body text-ksf-accent text-xs tracking-[0.4em] uppercase mb-4">Hablemos</p>
          <h2 className="font-display text-ksf-text text-5xl sm:text-7xl tracking-wider leading-none mb-6">
            CONTACTO
          </h2>
          <p className="font-body text-ksf-secondary text-sm leading-relaxed max-w-md mb-10">
            ¿Necesitás materiales para tu próximo proyecto? ¿Consulta sobre productos o envíos?
            Escribinos y te respondemos a la brevedad.
          </p>

          {/* CTA WhatsApp */}
          <Link
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1fba59] text-white font-body text-sm tracking-widest uppercase px-8 py-4 transition-colors duration-200 mb-4 w-full sm:w-auto justify-center sm:justify-start"
          >
            <MessageCircle size={18} />
            Escribinos por WhatsApp
          </Link>

          {/* Instagram */}
          <div className="mt-4">
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-ksf-secondary hover:text-ksf-accent text-sm tracking-widest uppercase transition-colors duration-200"
            >
              <ExternalLink size={16} />
              @killerstudio.fx
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Panel info */}
        <div className="border border-ksf-border bg-ksf-surface p-10 space-y-8">
          <div>
            <p className="font-body text-ksf-accent text-[10px] tracking-widest uppercase mb-2">Envíos</p>
            <p className="font-body text-ksf-text text-sm">Todo el país · por preferencia</p>
          </div>

          <div className="w-full h-px bg-ksf-border" />

          <div>
            <p className="font-body text-ksf-accent text-[10px] tracking-widest uppercase mb-2">Medios de pago</p>
            <p className="font-body text-ksf-text text-sm">Transferencia · MercadoPago · Efectivo</p>
          </div>
        </div>
      </div>
    </section>
  )
}
