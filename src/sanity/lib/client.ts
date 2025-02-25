import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: "2023-01-01",
  useCdn: false, // Don't use CDN for authenticated queries
});

export default sanityClient;