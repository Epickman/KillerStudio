import type { Metadata } from 'next'
import { Bebas_Neue, Barlow } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/ui/Navbar'
import { CartDrawer } from '@/components/ui/CartDrawer'
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/config'

const bebasNeue = Bebas_Neue({
  weight: '400',
  variable: '--font-display',
  subsets: ['latin'],
})

const barlow = Barlow({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://killerstudiofx.com'),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: 'website',
    url: 'https://killerstudiofx.com',
    siteName: SITE_NAME,
    locale: 'es_AR',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '3TPvL_FUJHVruiY_RW43RGvMtoUB_K07gyNIXit8JOs',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${bebasNeue.variable} ${barlow.variable} font-body bg-ksf-bg text-ksf-text antialiased`}>
        <Navbar />
        <main className="pt-0">
          {children}
        </main>
        <CartDrawer />
      </body>
    </html>
  )
}
