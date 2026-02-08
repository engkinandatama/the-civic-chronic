import { defineCollection, z } from 'astro:content';

const casesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    status: z.enum(['Active Investigation', 'Indefinite Hold', 'Closed - Unresolved', 'Pending Review']),
    location: z.string(),
    category: z.enum(['Infrastructure', 'Bureaucracy', 'Public Space', 'Policy']),
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
