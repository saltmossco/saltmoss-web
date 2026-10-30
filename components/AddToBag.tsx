"use client";

import { useState } from "react";
import styles from "./page.module.css";

export function AddToBag({ name }: { name: string }) {
	const [added, setAdded] = useState(false);
	return (
		<button
			type="button"
			className={styles.primary}
			onClick={() => setAdded(true)}
			aria-live="polite"
		>
			{added ? `${name} added to your bag` : "Add to bag"}
		</button>
	);
}
