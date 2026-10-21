import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/client'
import { productBySlugQuery } from '@/sanity/queries'
import { urlForImage } from '@/sanity/image'
import { ProductDetail } from './ProductDetail'

export const revalidate = 60

type Props = { params: Promise<{ slug: string }> }

function getOgImageUrl(mainImage: unknown): string | null {
  if (!mainImage) return null
  if (typeof mainImage === 'string') return mainImage
  try {
    return urlForImage(mainImage as Parameters<typeof urlForImage>[0]).width(1200).height(630).url()
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = await client.fetch(productBySlugQuery, { slug })
  if (!product) return {}
  const ogImage = getOgImageUrl(product.mainImage)
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: ogImage ? [{ url: ogImage }] : [],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = await client.fetch(productBySlugQuery, { slug })
  if (!product) notFound()
  return <ProductDetail product={product} />
}
