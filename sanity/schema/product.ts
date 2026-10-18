import { defineType, defineField } from 'sanity'

export const productSchema = defineType({
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nombre', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: Rule => Rule.required() }),
    defineField({ name: 'price', title: 'Precio', type: 'number', validation: Rule => Rule.required() }),
    defineField({ name: 'previousPrice', title: 'Precio anterior (oferta)', type: 'number' }),
    defineField({ name: 'shortDescription', title: 'Descripción corta', type: 'text', rows: 3 }),
    defineField({ name: 'mainImage', title: 'Imagen principal', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() }),
    defineField({ name: 'category', title: 'Categoría', type: 'reference', to: [{ type: 'category' }] }),
    defineField({ name: 'stock', title: 'Stock', type: 'number', initialValue: 0 }),
    defineField({ name: 'isFeatured', title: 'Destacado', type: 'boolean', initialValue: false }),
    defineField({ name: 'isNew', title: 'Nuevo', type: 'boolean', initialValue: false }),
    defineField({ name: 'isOnSale', title: 'En oferta', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'name', media: 'mainImage', subtitle: 'price' },
    prepare({ title, media, subtitle }) {
      return { title, media, subtitle: `$${subtitle}` }
    },
  },
})
