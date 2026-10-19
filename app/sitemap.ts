import { MetadataRoute } from 'next'
import { client } from '@/sanity/client'
import { groq } from 'next-sanity'

const allSlugsQuery = groq`*[_type == "product"]{ "slug": slug.current, _updatedAt }`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products: { slug: string; _updatedAt: string }[] = await client.fetch(allSlugsQuery)

  const productEntries: MetadataRoute.Sitemap = products.map(p => ({
    url: `https://killerstudiofx.com/product/${p.slug}`,
    lastModified: new Date(p._updatedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [
    { url: 'https://killerstudiofx.com', lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: 'https://killerstudiofx.com/shop', lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: 'https://killerstudiofx.com/portfolio', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...productEntries,
  ]
}
