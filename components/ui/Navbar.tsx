'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag, Menu, X, Search } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useCartStore } from '@/lib/cartStore'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { toggleCart, itemCount } = useCartStore()

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const count = mounted ? itemCount() : 0

  const navLinks = [
    { href: '/shop', label: 'Shop' },
    { href: '/shop?category=kits-sets', label: 'Kits' },
    { href: '/shop?collection=new-drop', label: 'New Drop' },
    { href: '/portfolio', label: 'Portfolio' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 bg-ksf-bg/95 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? 'border-b border-ksf-border shadow-[0_4px_30px_rgba(232,23,122,0.06)]' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-24'}`}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Killer Studio FX"
              width={56}
              height={56}
              className={`rounded-full object-cover transition-all duration-300 ${scrolled ? 'w-9 h-9' : 'w-14 h-14'}`}
            />
            <div className="hidden sm:flex flex-col leading-none">
              <span className={`font-display text-ksf-text tracking-wider transition-all duration-300 ${scrolled ? 'text-lg' : 'text-2xl'}`}>
                KILLER STUDIO <span className="text-ksf-accent">FX</span>
              </span>
              {!scrolled && (
                <span className="font-body text-ksf-secondary text-[10px] tracking-[0.3em] uppercase mt-0.5">
                  Special Effects Makeup
                </span>
              )}
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-ksf-secondary hover:text-ksf-accent tracking-widest uppercase transition-all duration-200 ${scrolled ? 'text-xs' : 'text-sm'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link href="/shop" className="text-ksf-secondary hover:text-ksf-accent transition-colors hidden sm:block">
              <Search size={scrolled ? 16 : 20} className="transition-all duration-300" />
            </Link>
            <button
              onClick={toggleCart}
              className="text-ksf-secondary hover:text-ksf-accent transition-colors relative"
            >
              <ShoppingBag size={scrolled ? 16 : 20} className="transition-all duration-300" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-ksf-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </button>
            <button
              className="md:hidden text-ksf-secondary hover:text-ksf-accent transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-ksf-border py-4 space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-body text-ksf-secondary hover:text-ksf-accent text-xs tracking-widest uppercase transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
