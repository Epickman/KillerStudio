import { defineType, defineField } from 'sanity'

export const productSchema = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: Rule => Rule.required() }),
    defineField({ name: 'price', title: 'Price', type: 'number', validation: Rule => Rule.required() }),
    defineField({ name: 'previousPrice', title: 'Previous Price', type: 'number' }),
    defineField({ name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'text', rows: 3 }),
    defineField({ name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }] }),
    defineField({ name: 'brand', title: 'Brand', type: 'string' }),
    defineField({ name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'sku', title: 'SKU', type: 'string' }),
    defineField({ name: 'stock', title: 'Stock', type: 'number', initialValue: 0 }),
    defineField({
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Variant Name', type: 'string' },
          { name: 'options', title: 'Options', type: 'array', of: [{ type: 'string' }] },
        ],
      }],
    }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'isFeatured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'isNew', title: 'New', type: 'boolean', initialValue: false }),
    defineField({ name: 'isOnSale', title: 'On Sale', type: 'boolean', initialValue: false }),
    defineField({ name: 'relatedProducts', title: 'Related Products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] }),
    defineField({ name: 'howToUse', title: 'How to Use', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'technicalInfo', title: 'Technical Info', type: 'array', of: [{ type: 'block' }] }),
  ],
  preview: {
    select: { title: 'name', media: 'mainImage', subtitle: 'price' },
    prepare({ title, media, subtitle }) {
      return { title, media, subtitle: `$${subtitle}` }
    },
  },
})
