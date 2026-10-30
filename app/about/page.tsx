import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Our story",
	description:
		"Saltmoss was started in 2021 by a marine biologist and a former restaurant chef who harvest seaweed off Mount Desert Island and make skincare from it in Portland, Maine.",
	alternates: { canonical: "/about" },
};

export default function AboutPage() {
	return (
		<>
			<section className={styles.narrow}>
				<p className={styles.eyebrow}>Our story</p>
				<h1>Two people, one harvester license and a lot of wet boots.</h1>
				<p className={styles.lede}>
					Saltmoss started in 2021 in a rented kitchen on Munjoy Hill, with a stockpot of Irish
					moss and a friend whose eczema wouldn&apos;t quit.
				</p>
			</section>

			<section className={styles.section}>
				<img src="/illustrations/harvest.svg" width={1120} height={420} />
			</section>

			<section className={styles.narrow}>
				<p>
					Wren Albee spent eight years studying intertidal algae at the Darling Marine Center
					before deciding she would rather work with seaweed than count it. Tomás Ruiz cooked
					with it, first at a seafood restaurant in Rockland and then running the kitchen at an
					inn in Bar Harbor, where he started making a carrageen gel for a friend&apos;s cracked
					hands on the side.
				</p>
				<p>
					The gel worked. Friends asked for more, then friends of friends, and by the summer of
					2022 we had a commercial workshop on Commercial Street, an independent lab running our
					safety tests and a harvester license from the Maine Department of Marine Resources.
				</p>

				<h2>How we work</h2>
				<ul className={styles.list}>
					<li>
						<strong>We harvest it ourselves.</strong> Bladderwrack, dulse and Irish moss are cut
						by hand at low tide off Mount Desert Island, above the holdfast so they regrow. Our two
						kelps come from a family farm in Casco Bay.
					</li>
					<li>
						<strong>We make it in small batches.</strong> 300 units at a time, poured and labeled
						by the four of us. Every jar has its batch date written on the bottom.
					</li>
					<li>
						<strong>We tell you everything.</strong> Full ingredient lists on every product page,
						with what each one does. See <Link href="/ingredients">ingredients</Link>.
					</li>
				</ul>

				<h2>The team</h2>
				<p>
					Wren runs formulation and the harvest calendar. Tomás runs production and answers most
					of your emails. Jess Kimura handles fulfillment and wholesale, and Abe Lindqvist joins us
					every summer as our second harvester.
				</p>
				<p>
					Visit us at the workshop on Saturdays, 10 to 2, at 61 Commercial Street, or{" "}
					<Link href="/contact">get in touch</Link>.
				</p>
			</section>
		</>
	);
}
