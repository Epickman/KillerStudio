import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 's3poai87',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
