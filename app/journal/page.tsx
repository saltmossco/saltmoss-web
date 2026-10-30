import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import { formatDate, getPosts } from "@/lib/journal";

export const revalidate = 600;

export const metadata: Metadata = {
	title: "Journal",
	description:
		"Notes from the Saltmoss workshop: how we harvest, what seaweed does for skin, and routines for cold, dry Maine winters.",
	alternates: { canonical: "/journal" },
};

export default async function JournalPage() {
	const posts = await getPosts();

	return (
		<section className={styles.narrow}>
			<p className={styles.eyebrow}>Journal</p>
			<h1>Notes from the tideline</h1>
			<p className={styles.lede}>
				Harvest reports, ingredient deep-dives and the occasional routine, written by the people
				who make Saltmoss.
			</p>

			{posts.length === 0 ? (
				<p className={styles.empty}>
					No journal entries yet. We&apos;re out on the rocks; check back soon.
				</p>
			) : (
				<ul className={styles.postList}>
					{posts.map((post) => (
						<li key={post.slug}>
							<h2>
								<Link href={`/journal/${post.slug}`}>{post.title}</Link>
							</h2>
							<p className={styles.postMeta}>{formatDate(post.publishedAt)}</p>
							<p>{post.excerpt}</p>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
