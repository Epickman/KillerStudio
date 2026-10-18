import { notFound } from 'next/navigation'
import { client } from '@/sanity/client'
import { productBySlugQuery } from '@/sanity/queries'
import { ProductDetail } from './ProductDetail'

export const revalidate = 60

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await client.fetch(productBySlugQuery, { slug: params.slug })
  if (!product) notFound()
  return <ProductDetail product={product} />
}
