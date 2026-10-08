import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './client'

const builder = createImageUrlBuilder(client as any)

export const urlForImage = (source: any) =>
  builder.image(source).auto('format').fit('max')
