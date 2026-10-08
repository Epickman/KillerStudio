import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { INSTAGRAM_URL } from '@/lib/config'

export function InstagramSection() {
  const placeholders = Array.from({ length: 6 }, (_, i) => i + 1)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-ksf-accent text-xs tracking-[0.3em] uppercase mb-3">Seguinos</p>
        <h2 className="text-ksf-text text-3xl sm:text-4xl font-bold tracking-tight mb-4">@killerstudio.fx</h2>
        <Link
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-ksf-secondary hover:text-ksf-text text-xs tracking-widest uppercase transition-colors"
        >
          <ExternalLink size={14} />
          Ver Instagram
        </Link>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {placeholders.map(i => (
          <Link
            key={i}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group aspect-square bg-ksf-surface border border-ksf-border overflow-hidden hover:border-ksf-accent/50 transition-colors"
          >
            <div className="w-full h-full bg-gradient-to-br from-ksf-muted to-ksf-surface flex items-center justify-center group-hover:from-ksf-accent/10 transition-colors">
              <ExternalLink size={20} className="text-ksf-border group-hover:text-ksf-accent/50 transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
