export type SanityImageSource = {
  _type: string
  asset?: { _ref: string; _type: string }
  [key: string]: unknown
}

export interface Product {
  _id: string
  name: string
  slug: { current: string }
  price: number
  previousPrice?: number
  shortDescription?: string
  description?: unknown[]
  mainImage?: SanityImageSource | string
  gallery?: (SanityImageSource | string)[]
  sku?: string
  stock?: number
  variants?: Array<{ name: string; options: string[] }>
  tags?: string[]
  isFeatured?: boolean
  isNew?: boolean
  isOnSale?: boolean
  category?: Category
  relatedProducts?: Product[]
  howToUse?: unknown[]
  technicalInfo?: unknown[]
  brand?: string
}

export interface Category {
  _id?: string
  name: string
  slug: { current: string }
  image?: SanityImageSource | string
  description?: string
}

export interface Collection {
  _id: string
  name: string
  slug: { current: string }
  description?: string
  products?: Product[]
  image?: SanityImageSource | string
}

export interface CartItem {
  _id: string
  name: string
  slug: { current: string }
  price: number
  mainImage?: SanityImageSource | string
  quantity: number
  selectedVariants?: Record<string, string>
}
