import Link from "next/link";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<div className={styles.col}>
					<strong>Saltmoss</strong>
					<p>
						Seaweed skincare in small batches. Hand-harvested off Mount Desert Island and made
						in Portland, Maine.
					</p>
				</div>
				<div className={styles.col}>
					<span className={styles.heading}>Shop</span>
					<Link href="/shop">All products</Link>
					<Link href="/shop/tidepool-serum">Tidepool Serum</Link>
					<Link href="/shop/kelp-cleansing-balm">Kelp Cleansing Balm</Link>
					<Link href="/ingredients">Ingredients</Link>
				</div>
				<div className={styles.col}>
					<span className={styles.heading}>Help</span>
					<Link href="/shipping-returns">Shipping &amp; returns</Link>
					<Link href="/contact">Contact</Link>
				</div>
				<div className={styles.col}>
					<span className={styles.heading}>Saltmoss</span>
					<Link href="/about">Our story</Link>
					<Link href="/journal">Journal</Link>
				</div>
			</div>
			<p className={styles.legal}>
				© {new Date().getFullYear()} Saltmoss Botanicals LLC · 61 Commercial St, Portland, ME
				04101
			</p>
		</footer>
	);
}
