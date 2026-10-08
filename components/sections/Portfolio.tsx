'use client'
import { useState } from 'react'
import { portfolioProjects, PortfolioProject } from '@/lib/portfolioData'

const categories = ['Todos', 'Cine', 'Teatro', 'Fotografía', 'Publicidad']

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = activeCategory === 'Todos'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="font-body text-ksf-accent text-xs tracking-[0.4em] uppercase mb-3">Trabajos realizados</p>
        <h2 className="font-display text-ksf-text text-4xl sm:text-6xl tracking-wider mb-6">PORTFOLIO</h2>
        <p className="font-body text-ksf-secondary text-sm leading-relaxed max-w-xl">
          Proyectos de maquillaje FX para cine, teatro, fotografía y publicidad.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex gap-2 flex-wrap mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-body px-4 py-2 text-xs tracking-widest uppercase transition-all duration-200 border ${
              activeCategory === cat
                ? 'bg-ksf-accent border-ksf-accent text-white'
                : 'border-ksf-border text-ksf-secondary hover:border-ksf-accent hover:text-ksf-accent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(project => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <div className="group relative bg-ksf-surface border border-ksf-border overflow-hidden hover:border-ksf-accent/60 transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ksf-surface via-transparent to-transparent" />
        <div className="absolute inset-0 bg-ksf-accent/0 group-hover:bg-ksf-accent/10 transition-colors duration-300" />

        <div className="absolute top-4 left-4">
          <span className="font-body bg-ksf-accent text-white text-[10px] tracking-widest uppercase px-3 py-1">
            {project.category}
          </span>
        </div>

        <div className="absolute top-4 right-4">
          <span className="font-body text-ksf-secondary text-[10px] tracking-widest">{project.year}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display text-ksf-text text-2xl tracking-wide mb-2">{project.title}</h3>
        <p className="font-body text-ksf-secondary text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-body text-ksf-secondary text-[10px] tracking-wide border border-ksf-border px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
