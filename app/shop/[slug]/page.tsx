import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "@/components/page.module.css";
import { AddToBag } from "@/components/AddToBag";
import { PRODUCTS, formatPrice, getProduct } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
	return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const product = getProduct(slug);
	if (!product) return {};
	return {
		title: product.name,
		description: product.summary,
		alternates: { canonical: `/shop/${product.slug}` },
	};
}

export default async function ProductPage({ params }: Props) {
	const { slug } = await params;
	const product = getProduct(slug);
	if (!product) notFound();

	return (
		<section className={styles.section}>
			<div className={styles.product}>
				<img src={product.image} alt={`${product.name}, ${product.size}`} width={520} height={520} />
				<div>
					<p className={styles.eyebrow}>
						<Link href="/shop">Shop</Link> / {product.name}
					</p>
					<h1>{product.name}</h1>
					<p className={styles.price}>
						{formatPrice(product.price)} · {product.size}
					</p>
					{product.description.map((para) => (
						<p key={para.slice(0, 24)}>{para}</p>
					))}
					<AddToBag name={product.name} />

					<dl className={styles.facts}>
						<dt>Good for</dt>
						<dd>{product.skinTypes}</dd>
						<dt>How to use</dt>
						<dd>{product.howToUse}</dd>
						<dt>Key ingredients</dt>
						<dd>
							<ul className={styles.list}>
								{product.keyIngredients.map((i) => (
									<li key={i.name}>
										<strong>{i.name}.</strong> {i.why}
									</li>
								))}
							</ul>
						</dd>
						<dt>Full ingredients</dt>
						<dd className={styles.inci}>{product.inci}</dd>
						<dt>Shipping</dt>
						<dd>
							Ships from Portland, Maine within two business days.{" "}
							<Link href="/shipping-returns">Shipping and returns</Link>.
						</dd>
					</dl>
				</div>
			</div>
		</section>
	);
}
