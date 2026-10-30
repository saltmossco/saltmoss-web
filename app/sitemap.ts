import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/journal";
import { PRODUCTS } from "@/lib/products";

const BASE = "https://saltmoss.co";

const PAGES = ["/", "/shop", "/ingredients", "/about", "/journal", "/shipping-returns", "/contact"];

export const revalidate = 600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = await getPosts();
	return [
		...PAGES.map((path) => ({ url: `${BASE}${path === "/" ? "" : path}` })),
		...PRODUCTS.map((p) => ({ url: `${BASE}/shop/${p.slug}` })),
		...posts.map((post) => ({
			url: `${BASE}/journal/${post.slug}`,
			lastModified: post.publishedAt,
		})),
	];
}
