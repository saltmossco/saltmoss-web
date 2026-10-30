import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Shipping & returns",
	description:
		"How Saltmoss orders ship from Portland, Maine: delivery times, rates, free shipping on US orders over $65, international shipping, and our 30-day return policy.",
	alternates: { canonical: "/shipping-returns" },
};

export default function ShippingReturnsPage() {
	return (
		<section className={styles.narrow}>
			<p className={styles.eyebrow}>Help</p>
			<h1>Shipping &amp; returns</h1>
			<p className={styles.lede}>
				Every order is packed by hand in our Portland workshop, in recycled paper and compostable
				cornstarch fill. No plastic bubble wrap.
			</p>

			<h2>Shipping in the US</h2>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Method</th>
						<th>Arrives</th>
						<th>Cost</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Ground (USPS)</td>
						<td>3 to 6 business days</td>
						<td>$6, free on orders over $65</td>
					</tr>
					<tr>
						<td>Priority (USPS)</td>
						<td>2 to 3 business days</td>
						<td>$12</td>
					</tr>
					<tr>
						<td>Local pickup, Portland</td>
						<td>Next business day</td>
						<td>Free</td>
					</tr>
				</tbody>
			</table>
			<p>
				Orders placed before noon Eastern on a weekday ship the same day. Everything else ships
				within two business days. You&apos;ll get a tracking link by email as soon as the label is
				printed.
			</p>

			<h2>International</h2>
			<p>
				We ship to Canada for a flat $18 and to the UK and EU for $26. Duties and import taxes are
				collected by the carrier on delivery and are not included in our prices. Our water-based
				gels can freeze in transit between December and February; we pack them with an insulated
				sleeve when the forecast calls for it.
			</p>

			<h2>Returns</h2>
			<p>
				If something isn&apos;t right for your skin, you have 30 days from delivery to return it,
				even if it&apos;s opened. We refund the full product price to your original payment method
				within five business days of receiving it. Return shipping is free in the US with the
				prepaid label we email you.
			</p>
			<p>
				<Link href="/returns/start">Start a return</Link> with your order number and the email you
				ordered with. Gift cards can&apos;t be refunded, but we&apos;ll
				always help you find a product that suits you better.
			</p>

			<h2>Damaged or missing items</h2>
			<p>
				Send a photo to <a href="mailto:orders@saltmoss.co">orders@saltmoss.co</a> within 14 days
				and we&apos;ll ship a replacement right away. You don&apos;t need to send anything back.
			</p>
		</section>
	);
}
