import { defineCollection, z } from 'astro:content';


// Force content reload (Update 2)
const casesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    status: z.string(),
    location: z.string(),
    category: z.string(),
    bureaucracy_score: z.number().min(0).max(100),
    financials: z.object({
      budget: z.string(),
      waste: z.string(),
      cost_per_capita: z.string(),
    }),
    timeline: z.array(z.object({
      date: z.string(),
      title: z.string(),
      description: z.string(),
      type: z.enum(['standard', 'critical', 'failure']),
    })).optional(),
    redacted_level: z.number().min(0).max(100).default(0),
    cover_image: z.string().optional(),
    cover_alt: z.string().optional(),
  }),
});

export const collections = {
  'cases': casesCollection,
};
