import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from '../env'

export const writeClient = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // MUST be set in .env
});
