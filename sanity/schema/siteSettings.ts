import { defineType, defineField } from 'sanity'

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Site Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'whatsappNumber', title: 'WhatsApp Number', type: 'string' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
  ],
})
