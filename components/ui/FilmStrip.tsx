'use client'

const ITEMS = [
  'KILLER STUDIO FX', 'REEL 001', 'SPECIAL EFFECTS',
  'PRO GRADE', 'HORROR · CINEMA', 'SFX MAKEUP',
  'PROSTHETICS', 'LATEX · SILICONE', 'BLOOD EFFECTS',
  'FRAME 0042', 'CINEMA GRADE', 'KILLER STUDIO FX',
]

const doubled = [...ITEMS, ...ITEMS]

const Hole = () => (
  <span
    className="flex-shrink-0 block"
    style={{
      width: 9,
      height: 15,
      borderRadius: 2,
      background: '#000',
      border: '1px solid rgba(255,255,255,0.13)',
      boxShadow: 'inset 0 1px 3px rgba(0,0,0,1)',
    }}
  />
)

interface FilmStripProps {
  direction?: 'left' | 'right'
  className?: string
}

export function FilmStrip({ direction = 'left', className = '' }: FilmStripProps) {
  return (
    <div className={`absolute left-0 right-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}>
      <div
        className={direction === 'left' ? 'film-scroll-left' : 'film-scroll-right'}
        style={{ display: 'flex', width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex flex-col"
            style={{
              background: '#07050f',
              borderRight: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            {/* Perforaciones superiores */}
            <div
              className="flex items-center justify-between"
              style={{ padding: '12px 4px', background: '#050310', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <Hole /><Hole /><Hole /><Hole /><Hole /><Hole />
            </div>

            {/* Fotograma */}
            <div
              className="flex items-center justify-center"
              style={{ padding: '18px 24px', minWidth: 148 }}
            >
              <span
                className="font-mono uppercase whitespace-nowrap"
                style={{ fontSize: 8, letterSpacing: '0.38em', color: 'rgba(255,255,255,0.15)' }}
              >
                {item}
              </span>
            </div>

            {/* Perforaciones inferiores */}
            <div
              className="flex items-center justify-between"
              style={{ padding: '12px 4px', background: '#050310', borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <Hole /><Hole /><Hole /><Hole /><Hole /><Hole />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
