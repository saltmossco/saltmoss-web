import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import { PRODUCTS, formatPrice } from "@/lib/products";

export const metadata: Metadata = {
	title: "Shop all skincare",
	alternates: { canonical: "/shop" },
};

export default function ShopPage() {
	return (
		<section className={styles.section}>
			<p className={styles.eyebrow}>Shop</p>
			<h1>Five products. That&apos;s the whole range.</h1>
			<p className={styles.lede}>
				Every product is made in batches of 300 and dated by hand on the bottom of the jar. Unopened,
				they keep for 18 months; once opened, use within 6.
			</p>
			<div className={styles.grid3}>
				{PRODUCTS.map((p) => (
					<Link key={p.slug} href={`/shop/${p.slug}`} className={styles.productCard}>
						<img src={p.image} alt={p.name} width={360} height={360} />
						<h3>{p.name}</h3>
						<p>{p.summary}</p>
						<span className={styles.price}>
							{formatPrice(p.price)} · {p.size}
						</span>
					</Link>
				))}
			</div>
		</section>
	);
}
