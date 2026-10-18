import { defineType, defineField } from 'sanity'

export const instagramPostSchema = defineType({
  name: 'instagramPost',
  title: 'Post de Instagram',
  type: 'document',
  fields: [
    defineField({ name: 'image', title: 'Imagen', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() }),
    defineField({ name: 'link', title: 'Link al post', type: 'url' }),
    defineField({ name: 'order', title: 'Orden', type: 'number', initialValue: 0 }),
  ],
  preview: {
    select: { media: 'image', title: 'link' },
    prepare({ media, title }) {
      return { media, title: title || 'Post de Instagram' }
    },
  },
})
