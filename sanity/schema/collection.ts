import { defineType, defineField } from 'sanity'

export const collectionSchema = defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: Rule => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'products', title: 'Products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
  ],
})
