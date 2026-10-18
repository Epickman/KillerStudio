'use client'

// Posiciones fijas para evitar mismatch de hidratación
const DUST = [
  { id:  0, x: 14, y: 22, s: 1.5, d: 0.3, dur:  9 },
  { id:  1, x: 29, y: 58, s: 1.0, d: 1.8, dur:  7 },
  { id:  2, x: 47, y: 35, s: 2.0, d: 0.7, dur: 11 },
  { id:  3, x: 61, y: 78, s: 1.2, d: 2.5, dur:  8 },
  { id:  4, x: 76, y: 28, s: 1.8, d: 0.1, dur: 12 },
  { id:  5, x: 89, y: 52, s: 1.0, d: 3.2, dur:  9 },
  { id:  6, x: 22, y: 72, s: 1.5, d: 4.1, dur: 10 },
  { id:  7, x: 51, y: 14, s: 1.2, d: 2.8, dur:  8 },
  { id:  8, x: 67, y: 88, s: 2.0, d: 1.5, dur: 13 },
  { id:  9, x: 39, y: 47, s: 1.0, d: 0.9, dur:  7 },
  { id: 10, x: 83, y: 33, s: 1.5, d: 3.7, dur: 11 },
  { id: 11, x:  7, y: 63, s: 1.2, d: 2.2, dur:  9 },
  { id: 12, x: 56, y: 68, s: 1.8, d: 4.5, dur:  8 },
  { id: 13, x: 93, y: 19, s: 1.0, d: 1.3, dur: 12 },
  { id: 14, x: 71, y: 43, s: 2.0, d: 3.0, dur: 10 },
  { id: 15, x: 34, y: 83, s: 1.5, d: 0.6, dur:  9 },
  { id: 16, x: 44, y: 92, s: 1.0, d: 5.1, dur: 14 },
  { id: 17, x: 18, y: 40, s: 1.8, d: 1.1, dur:  8 },
  { id: 18, x: 58, y: 55, s: 1.2, d: 3.9, dur: 10 },
  { id: 19, x: 80, y: 70, s: 1.5, d: 2.4, dur:  7 },
]

export function ProjectionEffect() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      style={{ zIndex: -1 }}
    >
      {/* Halo difuso ambiental */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,175,60,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Viñeta lateral — refuerza sensación de pantalla */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(5,2,14,0.55) 100%)',
        }}
      />

      {/* Rayas de daño de película — verticales tenues */}
      {[22, 51, 78].map((x, i) => (
        <div
          key={i}
          className="film-scratch"
          style={{
            position: 'absolute',
            top: 0,
            left: `${x}%`,
            width: 1,
            height: '100%',
            background: `rgba(255,220,160,0.06)`,
            animationDelay: `${i * 2.3}s`,
          }}
        />
      ))}

      {/* Partículas de polvo en el haz */}
      {DUST.map(d => (
        <div
          key={d.id}
          style={{
            position: 'absolute',
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.s,
            height: d.s,
            borderRadius: '50%',
            background: 'rgba(255,215,140,0.55)',
            animation: `dustFloat ${d.dur}s ease-in-out ${d.d}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
