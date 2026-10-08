import { Hero } from '@/components/sections/Hero'
import { FeaturedCategories } from '@/components/sections/FeaturedCategories'
import { ProductCarousel } from '@/components/sections/ProductCarousel'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { ProductBanner } from '@/components/sections/ProductBanner'
import { ShopByEffect } from '@/components/sections/ShopByEffect'
import { AboutSection } from '@/components/sections/AboutSection'
import { PortfolioSection } from '@/components/sections/Portfolio'
import { InstagramSection } from '@/components/sections/InstagramSection'
import { Newsletter } from '@/components/sections/Newsletter'
import { Footer } from '@/components/sections/Footer'
import { demoProducts } from '@/lib/demoData'

export default function HomePage() {
  const featured = demoProducts.filter(p => p.isFeatured)
  const newProducts = demoProducts.filter(p => p.isNew)
  const onSale = demoProducts.filter(p => p.isOnSale)

  return (
    <>
      <Hero />
      <FeaturedCategories />

      {/* Carrusel de productos destacados */}
      <ProductCarousel products={featured} title="DESTACADOS" autoplay />

      <ShopByEffect />

      {/* New Drop grid */}
      <ProductGrid
        products={newProducts}
        title="New Drop"
        subtitle="Recién llegados"
        viewAllHref="/shop?collection=new-drop"
      />

      {/* Banner scrollable de ofertas */}
      {onSale.length > 0 && (
        <ProductBanner products={onSale} title="OFERTAS" accent />
      )}

      {/* Quién soy */}
      <AboutSection />

      {/* Portfolio preview */}
      <PortfolioSection />

      <InstagramSection />
      <Newsletter />
      <Footer />
    </>
  )
}
