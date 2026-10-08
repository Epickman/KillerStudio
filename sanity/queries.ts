import { groq } from 'next-sanity'

export const allProductsQuery = groq`
  *[_type == "product"] | order(_createdAt desc) {
    _id, name, slug, price, previousPrice, shortDescription,
    mainImage, isFeatured, isNew, isOnSale, stock, tags,
    category->{ name, slug }
  }
`

export const featuredProductsQuery = groq`
  *[_type == "product" && isFeatured == true][0...8] {
    _id, name, slug, price, previousPrice, shortDescription,
    mainImage, isFeatured, isNew, isOnSale, stock
  }
`

export const newProductsQuery = groq`
  *[_type == "product" && isNew == true][0...8] {
    _id, name, slug, price, previousPrice, shortDescription,
    mainImage, isFeatured, isNew, isOnSale, stock
  }
`

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id, name, slug, price, previousPrice, description,
    shortDescription, mainImage, gallery, sku, stock,
    variants, tags, isFeatured, isNew, isOnSale,
    howToUse, technicalInfo, brand,
    category->{ name, slug },
    "relatedProducts": relatedProducts[]->{ _id, name, slug, price, mainImage, isNew, isOnSale }
  }
`

export const allCategoriesQuery = groq`
  *[_type == "category"] { _id, name, slug, image, description }
`

export const collectionBySlugQuery = groq`
  *[_type == "collection" && slug.current == $slug][0] {
    _id, name, description,
    "products": products[]->{ _id, name, slug, price, previousPrice, mainImage, isNew, isOnSale, stock }
  }
`
