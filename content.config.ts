import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md'
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['index.md']
      },
      schema: z.object({
        links: z.array(z.object({
          badge: z.object({
            label: z.string(),
            color: z.string().optional(),
            icon: z.string().optional(),
            to: z.string().optional()
          }).optional(),
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional()
        })).optional(),  
        cover: z.string().optional(), 
        pinned: z.boolean().optional(),    
        date: z.date().optional()
      })
    })
  }
})
