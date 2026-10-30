import styles from "./SiteHeader.module.css";

export function AnnouncementBar() {
	return (
		<p className={styles.announce}>
			Free US shipping on orders over $50 · Small batches, made in Portland, Maine
		</p>
	);
}
