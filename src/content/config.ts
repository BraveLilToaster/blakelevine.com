import { defineCollection, z } from "astro:content";

/*
const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});
*/

const jobHistory = defineCollection({
  type: "data",
  schema: z.object({
    id: z.string(),
    companyName: z.string(),
    title: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    bulletPoints: z.string().array(),
    logo: z.object({
      avif: z.string().optional(),
      fallback: z.string(),
      webp: z.string().optional(),
    }),
  }),
});

export const collections = {
  //blog,
  jobHistory,
};
