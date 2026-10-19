import { client } from '@/sanity/client'
import {
  featuredProductsQuery,
  newProductsQuery,
  onSaleProductsQuery,
  allProductsQuery,
} from '@/sanity/queries'
import { Hero } from '@/components/sections/Hero'
import { ProductCarousel } from '@/components/sections/ProductCarousel'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { ProductBanner } from '@/components/sections/ProductBanner'
import { InteractiveProductBanner } from '@/components/sections/InteractiveProductBanner'
import { AboutSection } from '@/components/sections/AboutSection'
import { PortfolioSection } from '@/components/sections/Portfolio'
import { InstagramSection } from '@/components/sections/InstagramSection'
import { Footer } from '@/components/sections/Footer'

export const revalidate = 60

export default async function HomePage() {
  const [featured, newProducts, onSale, allProducts] = await Promise.all([
    client.fetch(featuredProductsQuery),
    client.fetch(newProductsQuery),
    client.fetch(onSaleProductsQuery),
    client.fetch(allProductsQuery),
  ])

  return (
    <>
      <Hero />

      {featured.length > 0 && (
        <ProductCarousel products={featured} title="DESTACADOS" autoplay />
      )}

      {allProducts.length > 0 && (
        <InteractiveProductBanner products={allProducts} />
      )}

      {newProducts.length > 0 && (
        <ProductGrid
          products={newProducts}
          title="New Drop"
          subtitle="Recién llegados"
          viewAllHref="/shop?collection=new-drop"
        />
      )}

      {onSale.length > 0 && (
        <ProductBanner products={onSale} title="OFERTAS" accent />
      )}

      <AboutSection />
      <PortfolioSection />
      <InstagramSection />
      <Footer />
    </>
  )
}
