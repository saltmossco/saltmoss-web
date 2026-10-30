import Link from "next/link";
import styles from "./SiteHeader.module.css";

const NAV = [
	{ href: "/shop", label: "Shop" },
	{ href: "/ingredients", label: "Ingredients" },
	{ href: "/journal", label: "Journal" },
	{ href: "/about", label: "About" },
];

export function SiteHeader() {
	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				<Link href="/" className={styles.brand}>
					<img src="/logo.svg" alt="" width={30} height={30} />
					<span>Saltmoss</span>
				</Link>
				<nav className={styles.nav} aria-label="Main">
					{NAV.map((item) => (
						<Link key={item.href} href={item.href}>
							{item.label}
						</Link>
					))}
				</nav>
				<Link href="/shop" className={styles.bag}>
					Shop all
				</Link>
			</div>
		</header>
	);
}
