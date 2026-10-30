import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Ingredients",
	description:
		"Every seaweed and botanical in Saltmoss skincare, where it comes from and why it is there: bladderwrack, sugar kelp, dulse, Irish moss and the rest of our short list.",
	alternates: { canonical: "/ingredients" },
};

const SEAWEEDS = [
	{
		name: "Bladderwrack",
		latin: "Fucus vesiculosus",
		where: "Intertidal rocks, Frenchman Bay. Harvested April to October.",
		why: "Fucoidan and trace minerals that help skin hold water. The base of Tidepool Serum.",
	},
	{
		name: "Sugar kelp",
		latin: "Saccharina latissima",
		where: "Subtidal; bought fresh each spring from a family kelp farm in Casco Bay.",
		why: "Softening polysaccharides and mannitol. Infused into the oil of our Cleansing Balm.",
	},
	{
		name: "Dulse",
		latin: "Palmaria palmata",
		where: "Low intertidal ledges on the outer islands, harvested by hand in June.",
		why: "Amino acids and phycoerythrin, a red antioxidant pigment. In Dulse Day Cream.",
	},
	{
		name: "Irish moss",
		latin: "Chondrus crispus",
		where: "Below the low tide line; gathered on the lowest spring tides of the year.",
		why: "A gentle gel that forms a breathable film. The heart of Carrageen Night Mask.",
	},
	{
		name: "Horsetail kelp",
		latin: "Laminaria digitata",
		where: "Subtidal, from the same Casco Bay farm, dried and stone-milled.",
		why: "Fine powder that adds slip and minerals to Saltgrass Body Polish.",
	},
];

export default function IngredientsPage() {
	return (
		<>
			<section className={styles.narrow}>
				<p className={styles.eyebrow}>Ingredients</p>
				<h2>Five seaweeds, and a short list of everything else.</h2>
				<p className={styles.lede}>
					We would rather explain eleven ingredients than hide behind thirty. Here is what goes
					into Saltmoss, where we get it, and what it is doing in the jar.
				</p>
			</section>

			<section className={styles.section}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Seaweed</th>
							<th>Where it comes from</th>
							<th>What it does</th>
						</tr>
					</thead>
					<tbody>
						{SEAWEEDS.map((s) => (
							<tr key={s.name}>
								<td>
									<strong>{s.name}</strong>
									<br />
									<em>{s.latin}</em>
								</td>
								<td>{s.where}</td>
								<td>{s.why}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>

			<section className={styles.narrow}>
				<h2>What we leave out</h2>
				<ul className={styles.list}>
					<li>Added fragrance and essential oils in anything for the face.</li>
					<li>Silicones, mineral oil and PEGs.</li>
					<li>Parabens and formaldehyde donors. We preserve with sodium levulinate and anisate, or benzoate and sorbate in our water gels.</li>
					<li>Microplastics. The body polish is salt and kelp, nothing else abrasive.</li>
				</ul>

				<h2>Sensitive skin</h2>
				<p>
					Seaweed is gentle for most people, but iodine-rich extracts can bother a small number of
					very reactive skins. If you have a known iodine sensitivity, or you are starting more than
					one new product at once, patch test first: a small dab on the inner arm, morning and
					evening, for three days. You can always <Link href="/contact">write to us</Link> with
					your ingredient list before you buy.
				</p>

				<h2>Testing</h2>
				<p>
					Every formula goes through a 50-person repeat insult patch test and a 28-day preservative
					challenge at an independent lab in New Hampshire before we sell it. We never test on
					animals and we don&apos;t sell anywhere that requires it.
				</p>
			</section>
		</>
	);
}
