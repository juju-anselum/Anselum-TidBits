import { Any } from "next-sanity";

export interface blogCardInterface {
	_id: string,
	title: string,
	slug: string,
	image: Any,
	readTime: string,
	_createdAt: string,
	tags: Any,
	smallDescription: string,
	content: Any
}