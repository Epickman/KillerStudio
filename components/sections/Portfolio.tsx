'use client'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { portfolioProjects, PortfolioProject } from '@/lib/portfolioData'

const categories = ['Todos', 'Cine', 'Teatro', 'Fotografía', 'Publicidad']

function getYouTubeEmbedUrl(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)
  if (match) return `https://www.youtube.com/embed/${match[1]}`
  if (url.includes('youtube.com/embed/')) return url
  return null
}

export function PortfolioSection({ hideHeader = false }: { hideHeader?: boolean }) {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [selected, setSelected] = useState<PortfolioProject | null>(null)

  const filtered = activeCategory === 'Todos'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {!hideHeader && (
        <div className="mb-12">
          <p className="font-body text-ksf-accent text-xs tracking-[0.4em] uppercase mb-3">Trabajos realizados</p>
          <h2 className="font-display text-ksf-text text-4xl sm:text-6xl tracking-wider mb-6">PORTFOLIO</h2>
          <p className="font-body text-ksf-secondary text-sm leading-relaxed max-w-xl">
            Proyectos de maquillaje FX para cine, teatro, fotografía y publicidad.
          </p>
        </div>
      )}

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(project => (
          <PortfolioCard key={project.id} project={project} onClick={() => setSelected(project)} />
        ))}
      </div>


{selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}

function PortfolioCard({ project, onClick }: { project: PortfolioProject; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative bg-ksf-surface border border-ksf-border overflow-hidden hover:border-ksf-accent/60 transition-all duration-300 text-left w-full cursor-pointer"
    >
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

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-body text-white text-[11px] tracking-widest uppercase bg-black/60 px-5 py-2 border border-white/20">
            Ver más
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-ksf-text text-2xl tracking-wide mb-2">{project.title}</h3>
        <p className="font-body text-ksf-secondary text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span key={tag} className="font-body text-ksf-secondary text-[10px] tracking-wide border border-ksf-border px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}

function ProjectModal({ project, onClose }: { project: PortfolioProject; onClose: () => void }) {
  const embedUrl = project.trailer ? getYouTubeEmbedUrl(project.trailer) : null

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-ksf-surface border border-ksf-border w-full max-w-4xl max-h-[92vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Encabezado */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-ksf-border">
          <div className="flex items-center gap-3">
            <span className="font-body bg-ksf-accent text-white text-[10px] tracking-widest uppercase px-3 py-1">
              {project.category}
            </span>
            <span className="font-body text-ksf-secondary text-xs tracking-widest">{project.year}</span>
          </div>
          <button onClick={onClose} className="text-ksf-secondary hover:text-ksf-text transition-colors p-1">
            <X size={20} />
          </button>
        </div>

        {/* Cuerpo: imagen + info */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-ksf-bg flex items-center justify-center md:min-h-[420px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[420px] object-contain"
            />
          </div>

          <div className="p-6 sm:p-8 flex flex-col gap-4">
            <h2 className="font-display text-ksf-text text-3xl sm:text-4xl tracking-wide leading-tight">
              {project.title}
            </h2>
            <p className="font-body text-ksf-secondary text-sm leading-relaxed">
              {project.longDescription || project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-ksf-border">
              {project.tags.map(tag => (
                <span key={tag} className="font-body text-ksf-accent text-[10px] tracking-wide border border-ksf-accent/40 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Trailer */}
        {embedUrl && (
          <div className="border-t border-ksf-border p-6">
            <p className="font-body text-ksf-secondary text-[10px] tracking-[0.3em] uppercase mb-4">Trailer oficial</p>
            <div className="relative aspect-video w-full">
              <iframe
                src={embedUrl}
                title={`Trailer — ${project.title}`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
