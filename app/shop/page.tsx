import type { Metadata } from 'next'
import { client } from '@/sanity/client'
import { allProductsQuery, allCategoriesQuery } from '@/sanity/queries'
import { ShopContent } from './ShopContent'

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Comprá productos de maquillaje FX profesional: sangre artificial, látex, ceras, paletas y kits para efectos especiales.',
}

export const revalidate = 60

export default async function ShopPage() {
  const [products, categories] = await Promise.all([
    client.fetch(allProductsQuery),
    client.fetch(allCategoriesQuery),
  ])

  return <ShopContent products={products} categories={categories} />
}
