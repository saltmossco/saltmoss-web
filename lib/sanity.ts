import { createClient, type SanityClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const sanity: SanityClient | null =
	projectId && dataset
		? createClient({
				projectId,
				dataset,
				apiVersion: "2025-02-19",
				useCdn: false,
			})
		: null;
