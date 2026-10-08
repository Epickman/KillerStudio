'use client'
import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-20 px-4 bg-ksf-surface border-y border-ksf-border">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-ksf-accent text-xs tracking-[0.3em] uppercase mb-4">Comunidad</p>
        <h2 className="text-ksf-text text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Entrá al set
        </h2>
        <p className="text-ksf-secondary text-sm leading-relaxed mb-8">
          Novedades, lanzamientos exclusivos y técnicas pro. Sin spam.
        </p>

        {submitted ? (
          <p className="text-ksf-accent text-sm tracking-widest uppercase">
            ¡Bienvenido al set!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="flex-1 bg-ksf-bg border border-ksf-border text-ksf-text placeholder:text-ksf-secondary px-4 py-3 text-sm focus:outline-none focus:border-ksf-accent transition-colors"
            />
            <button
              type="submit"
              className="bg-ksf-accent hover:bg-ksf-accent-hover text-white px-8 py-3 text-xs tracking-[0.25em] uppercase font-medium transition-colors whitespace-nowrap"
            >
              Suscribirse
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
