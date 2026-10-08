import { MetadataRoute } from 'next'
import { demoProducts } from '@/lib/demoData'

export default function sitemap(): MetadataRoute.Sitemap {
  const products = demoProducts.map(p => ({
    url: `https://killerstudiofx.com/product/${p.slug.current}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  return [
    { url: 'https://killerstudiofx.com', lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    { url: 'https://killerstudiofx.com/shop', lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    ...products,
  ]
}
