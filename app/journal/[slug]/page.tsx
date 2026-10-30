import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import styles from "@/components/page.module.css";
import { formatDate, getPost, getPosts } from "@/lib/journal";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 600;

export async function generateStaticParams() {
	const posts = await getPosts();
	return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const post = await getPost(slug);
	if (!post) return {};
	return {
		title: post.title,
		description: post.seoDescription,
		alternates: { canonical: `/journal/${post.slug}` },
		openGraph: { type: "article", publishedTime: post.publishedAt },
	};
}

export default async function JournalPostPage({ params }: Props) {
	const { slug } = await params;
	const post = await getPost(slug);
	if (!post) notFound();

	return (
		<article className={styles.narrow}>
			<p className={styles.eyebrow}>
				<Link href="/journal">Journal</Link>
			</p>
			<h1>{post.title}</h1>
			<p className={styles.postMeta}>{formatDate(post.publishedAt)}</p>
			<div className={styles.prose}>
				<PortableText value={post.body} />
			</div>
		</article>
	);
}
