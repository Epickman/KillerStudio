export interface Product {
  _id: string
  name: string
  slug: { current: string }
  price: number
  previousPrice?: number
  shortDescription?: string
  description?: any[]
  mainImage?: any
  gallery?: any[]
  sku?: string
  stock?: number
  variants?: Array<{ name: string; options: string[] }>
  tags?: string[]
  isFeatured?: boolean
  isNew?: boolean
  isOnSale?: boolean
  category?: Category
  relatedProducts?: Product[]
  howToUse?: any[]
  technicalInfo?: any[]
  brand?: string
}

export interface Category {
  _id?: string
  name: string
  slug: { current: string }
  image?: any
  description?: string
}

export interface Collection {
  _id: string
  name: string
  slug: { current: string }
  description?: string
  products?: Product[]
  image?: any
}

export interface CartItem {
  _id: string
  name: string
  slug: { current: string }
  price: number
  mainImage?: any
  quantity: number
  selectedVariants?: Record<string, string>
}
