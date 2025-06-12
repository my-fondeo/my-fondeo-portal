import { defineCollection, z } from "astro:content";

const landingStepCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  })
})

const opinionsCollection = defineCollection({
  type: 'data',
  schema: ({image}) => z.object({
    name: z.string(),
    username: z.string(),
    testimonial: z.string(),
    rating: z.number(),
    image: image(),
  })
})

export const collections = {
  blogSteps: landingStepCollection,
  opinions: opinionsCollection
};