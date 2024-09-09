import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
	apiVersion: '2023-05-03',
	dataset: 'production',
	projectId: process.env.SANITY_PROJECT_ID,
	useCdn: false,
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source)