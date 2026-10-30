import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Page not found",
};

export default function NotFound() {
	return (
		<section className={styles.narrow}>
			<p className={styles.eyebrow}>404</p>
			<h1>Washed out with the tide.</h1>
			<p className={styles.lede}>
				We couldn&apos;t find that page. Try the <Link href="/shop">shop</Link> or the{" "}
				<Link href="/journal">journal</Link>.
			</p>
		</section>
	);
}
