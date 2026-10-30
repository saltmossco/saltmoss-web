import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import { PRODUCTS, formatPrice } from "@/lib/products";

export const metadata: Metadata = {
	title: { absolute: "Saltmoss — Seaweed skincare, hand-harvested in Maine" },
	description:
		"Small-batch skincare made from seaweed we harvest by hand off the coast of Maine. Serums, cleansing balms and night masks with short ingredient lists and no added fragrance.",
	alternates: { canonical: "/" },
};

const FEATURED = ["tidepool-serum", "kelp-cleansing-balm", "carrageen-night-mask"];

export default function HomePage() {
	const featured = PRODUCTS.filter((p) => FEATURED.includes(p.slug));
	return (
		<>
			<section className={styles.section}>
				<div className={styles.hero}>
					<div>
						<p className={styles.eyebrow}>Seaweed skincare · Portland, Maine</p>
						<h1>Skincare from the cold side of the Atlantic.</h1>
						<p className={styles.lede}>
							We cut bladderwrack, kelp and Irish moss by hand at low tide, dry them in our
							Portland workshop and turn them into a handful of products that do one thing well.
							Batches of 300, never more.
						</p>
						<div className={styles.buttons}>
							<Link href="/shop" className={styles.primary}>
								Shop the collection
							</Link>
							<Link href="/ingredients" className={styles.secondary}>
								What&apos;s inside
							</Link>
						</div>
					</div>
					<img
						src="/illustrations/coast.svg"
						alt="Rockweed on granite at low tide with the Saltmoss workshop on the shore"
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>The ones people reorder</h2>
				<div className={styles.grid3}>
					{featured.map((p) => (
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

			<section className={styles.section}>
				<div className={styles.grid3}>
					<div className={styles.card}>
						<h3>Harvested, not farmed</h3>
						<p>
							We hold a Maine DMR seaweed harvester license and cut fewer than two tons a year,
							always leaving the holdfast so the plant grows back.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Short ingredient lists</h3>
						<p>
							Six to eleven ingredients per product, every one listed with what it does. No
							added fragrance, no essential oils on the face.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Refills by mail</h3>
						<p>
							Send back five empty glass jars or bottles with the prepaid label in every order
							and we&apos;ll take $10 off your next one.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<blockquote className={styles.quote}>
					&ldquo;I have rosacea and react to almost everything. The night mask is the first thing
					in years that made my cheeks calmer instead of angrier.&rdquo;
					<footer>Priya N., Burlington, Vermont · verified buyer</footer>
				</blockquote>
			</section>
		</>
	);
}
