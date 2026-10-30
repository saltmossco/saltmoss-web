import type { Metadata } from "next";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Shipping & returns",
	description:
		"Questions about an order, an ingredient or your skin? Write to the Saltmoss team in Portland, Maine. We answer every email within one business day.",
	alternates: { canonical: "/contact" },
};

export default function ContactPage() {
	return (
		<section className={styles.narrow}>
			<p className={styles.eyebrow}>Contact</p>
			<h1>Write to us. A person answers.</h1>
			<p className={styles.lede}>
				Questions about an order, an ingredient, or whether something will suit your skin. We reply
				within one business day, usually faster.
			</p>

			<form
				className={styles.form}
				action="mailto:hello@saltmoss.co"
				method="post"
				encType="text/plain"
			>
				<label>
					Your name
					<input name="name" type="text" autoComplete="name" required />
				</label>
				<label>
					Email
					<input name="email" type="email" autoComplete="email" required />
				</label>
				<label>
					What is it about?
					<select name="topic" defaultValue="product">
						<option value="order">An order I placed</option>
						<option value="product">Choosing a product</option>
						<option value="wholesale">Wholesale or stockists</option>
						<option value="press">Press</option>
						<option value="other">Something else</option>
					</select>
				</label>
				<label>
					Order number (if you have one)
					<input name="order" type="text" />
				</label>
				<label>
					Message
					<textarea name="message" rows={5} required />
				</label>
				<button type="submit" className={styles.primary}>
					Send
				</button>
			</form>

			<h2>Other ways to reach us</h2>
			<p>
				Orders and returns: <a href="mailto:orders@saltmoss.co">orders@saltmoss.co</a>
				<br />
				Everything else: <a href="mailto:hello@saltmoss.co">hello@saltmoss.co</a>
				<br />
				Phone: (207) 555-0163, Tuesday to Friday, 9 a.m. to 4 p.m. Eastern
				<br />
				Workshop: 61 Commercial St, Portland, ME 04101. Open to visitors Saturdays, 10 to 2.
			</p>
		</section>
	);
}
