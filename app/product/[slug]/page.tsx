import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/client'
import { productBySlugQuery } from '@/sanity/queries'
import { ProductDetail } from './ProductDetail'

export const revalidate = 60

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = await client.fetch(productBySlugQuery, { slug })
  if (!product) return {}
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: product.mainImage ? [{ url: product.mainImage }] : [],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = await client.fetch(productBySlugQuery, { slug })
  if (!product) notFound()
  return <ProductDetail product={product} />
}
