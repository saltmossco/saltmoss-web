import { defineQuery, type PortableTextBlock } from "next-sanity";
import { sanity } from "@/lib/sanity";

export type PostSummary = {
	title: string;
	slug: string;
	excerpt: string;
	publishedAt: string;
};

export type Post = PostSummary & {
	body: PortableTextBlock[];
	seoDescription?: string;
};

const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
	title,
	"slug": slug.current,
	excerpt,
	publishedAt
}`);

const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0] {
	title,
	"slug": slug.current,
	excerpt,
	publishedAt,
	body,
	seoDescription
}`);

export async function getPosts(): Promise<PostSummary[]> {
	if (!sanity) return [];
	return sanity.fetch<PostSummary[]>(POSTS_QUERY);
}

export async function getPost(slug: string): Promise<Post | null> {
	if (!sanity) return null;
	return sanity.fetch<Post | null>(POST_QUERY, { slug });
}

export function formatDate(iso: string): string {
	return new Date(iso).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC",
	});
}
