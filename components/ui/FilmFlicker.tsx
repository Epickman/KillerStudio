'use client'
import type { CSSProperties } from 'react'

interface FilmFlickerProps {
  className?: string
  style?: CSSProperties
}

export function FilmFlicker({ className = '', style = {} }: FilmFlickerProps) {
  return (
    <div
      className={`vintage-flicker absolute pointer-events-none select-none ${className}`}
      style={{
        background: 'rgb(255, 195, 70)',
        mixBlendMode: 'screen',
        zIndex: 25,
        ...style,
      }}
    />
  )
}
